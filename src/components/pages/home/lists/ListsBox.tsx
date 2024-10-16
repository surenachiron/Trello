import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragOverlay } from "@dnd-kit/core";

import { Card, CardFooter, CardTitle } from "@/components/ui/Card";
import { useAppDispatch } from "@/hooks/Redux";
import { deleteList } from "@/store/reducers/lists";
import { ListType } from "models/list";
import AddCard from "../cards/AddCard";
import DraggableCard from "../cards/DraggableCard";
import OverlayPreviewList from "./OverlayPreviewList";
import PlaceholderCard from "../cards/EmptyCards";

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
    data: { type: "list" },
  });

  const mainStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    color: isDragging ? "transparent" : "",
  };

  return (
    <>
      <div ref={setNodeRef} style={mainStyle} {...attributes}>
        <Card
          color={color}
          className="p-3 flex flex-col justify-between gap-y-3 h-fit min-w-60"
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

          <SortableContext
            items={cards.length > 0 ? cards : ["card-placeholder"]}
            strategy={verticalListSortingStrategy}
          >
            {cards.length > 0 ? (
              cards.map((card) => (
                <DraggableCard
                  key={card.id}
                  card={card}
                  isListDragging={isDragging}
                  listIndex={id}
                />
              ))
            ) : (
              <PlaceholderCard listIndex={id} />
            )}
          </SortableContext>

          <CardFooter>
            <AddCard listIndex={id} placeholder="Add a card" />
          </CardFooter>
        </Card>
      </div>
      {isDragging ? (
        <DragOverlay>
          <OverlayPreviewList name={name} cards={cards} />
        </DragOverlay>
      ) : null}
    </>
  );
};

export default ListsBox;
