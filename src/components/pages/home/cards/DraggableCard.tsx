import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { CardContext, CardTitle } from "@/components/ui/Card";
import { useAppDispatch } from "@/hooks/Redux";
import { deleteCard } from "@/store/reducers/lists";
import { CardType } from "models/list";
import { DragOverlay } from "@dnd-kit/core";

const DraggableCard = ({
  card,
  listIndex,
  isListDragging,
}: {
  card: CardType;
  listIndex: number;
  isListDragging: boolean;
}) => {
  const dispatch = useAppDispatch();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
  });

  const cardStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <CardContext
        ref={setNodeRef}
        style={cardStyle}
        className={`p-3 w-full ${isListDragging && "bg-transparent"}`}
        {...attributes}
      >
        <CardTitle
          close
          onClose={() =>
            dispatch(deleteCard({ listIndex: listIndex, cardIndex: card.id }))
          }
          className="w-full cursor-grab"
        >
          <span {...listeners} className="w-full block">
            {card.name}
          </span>
        </CardTitle>
      </CardContext>
      {isDragging ? (
        <DragOverlay>
          <CardContext
            style={cardStyle}
            className={`p-3 w-full ${isListDragging && "bg-transparent"}`}
          >
            <CardTitle close className="w-full cursor-grab">
              <span className="w-full block">{card.name}</span>
            </CardTitle>
          </CardContext>
        </DragOverlay>
      ) : null}
    </>
  );
};

export default DraggableCard;
