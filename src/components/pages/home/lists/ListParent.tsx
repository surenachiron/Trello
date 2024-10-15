import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

import { ListType } from "models/list";
import ListsBox from "./ListsBox";
import { useAppDispatch } from "@/hooks/Redux";
import { moveList } from "@/store/reducers/lists";

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

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEndList}
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
