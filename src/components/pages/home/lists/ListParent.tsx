import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import { ListType } from "models/list";
import ListsBox from "./ListsBox";
import { useAppDispatch } from "@/hooks/Redux";
import { moveList, moveCard } from "@/store/reducers/lists";

const ListParent = ({ lists }: { lists: ListType[] }) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEndList = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = lists.findIndex((list) => list.id === active.id);
      const newIndex = lists.findIndex((list) => list.id === over.id);

      dispatch(moveList({ oldIndex, newIndex }));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEndCard = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const activeList = lists.find(
      (list) => list.id === active.data.current.listId,
    );
    const overList = lists.find((list) => list.id === over.data.current.listId);

    const activeCardIndex = activeList?.cards.findIndex(
      (card) => card.id === active.id,
    );
    const overCardIndex = overList?.cards.findIndex(
      (card) => card.id === over.id,
    );

    if (
      activeList &&
      overList &&
      activeCardIndex !== undefined &&
      overCardIndex !== undefined
    ) {
      dispatch(
        moveCard({
          oldCardIndex: activeCardIndex,
          newCardIndex: overCardIndex,
          oldListIndex: activeList.id,
          newListIndex: overList.id,
        }),
      );
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragMove={(event) => {
        if (event.active.data.current?.type === "list") {
          handleDragEndList(event);
        } else {
          handleDragEndCard(event);
        }
      }}
    >
      <SortableContext items={lists} strategy={horizontalListSortingStrategy}>
        <div className="flex gap-x-3">
          {lists.length > 0 &&
            lists.map((list) => (
              <ListsBox
                key={list.id}
                id={list.id}
                name={list.name}
                color={list.color}
                cards={list.cards}
              />
            ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ListParent;
