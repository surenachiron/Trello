import { useSortable } from "@dnd-kit/sortable";

const PlaceholderCard = ({ listIndex }: { listIndex: number }) => {
  const { attributes, listeners, setNodeRef } = useSortable({
    id: `card-${listIndex}`,
    data: { type: "card", listId: listIndex },
  });

  return <div ref={setNodeRef} {...attributes} {...listeners}></div>;
};

export default PlaceholderCard;
