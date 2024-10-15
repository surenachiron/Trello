import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Card, CardFooter, CardTitle } from "@/components/ui/Card";
import { useAppDispatch } from "@/hooks/Redux";
import { deleteList, moveCard } from "@/store/reducers/lists";
import { ListType } from "models/list";
import AddCard from "../cards/AddCard";
import OverlayPreviewList from "./OverlayPreviewList";
import DraggableCard from "../cards/DraggableCard";

const ListsBox = ({ id, name, color, cards }: ListType) => {
  const dispatch = useAppDispatch();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const mainStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    color: isDragging ? "transparent" : "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEndCard = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      console.log(active.id, over.id);
      const oldIndex = cards?.findIndex((card) => card.id === active.id);
      const newIndex = cards?.findIndex((card) => card.id === over.id);

      dispatch(
        moveCard({
          oldIndex: oldIndex,
          newIndex: newIndex,
          listIndex: id,
        }),
      );
    }
  };

  const content = (
    <Card
      color={color}
      className="p-3 flex flex-col justify-between gap-y-3 h-fit min-w-60"
      ref={setNodeRef}
      style={mainStyle}
      {...attributes}
    >
      <CardTitle
        close
        onClose={() => dispatch(deleteList(id))}
        className="w-full cursor-grab"
      >
        <span {...listeners} className="w-full block">
          {name}
        </span>
      </CardTitle>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEndCard}
      >
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
          {cards.length > 0 &&
            cards.map((card) => (
              <DraggableCard
                key={card.id}
                card={card}
                isListDragging={isDragging}
                listIndex={id}
              />
            ))}
        </SortableContext>
      </DndContext>
      <CardFooter>
        <AddCard listIndex={id} placeholder="Add a card" />
      </CardFooter>
    </Card>
  );

  return (
    <>
      {content}
      {isDragging ? (
        <DragOverlay>
          <OverlayPreviewList name={name} cards={cards} />
        </DragOverlay>
      ) : null}
    </>
  );
};

export default ListsBox;
