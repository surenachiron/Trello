import { Card, CardContext, CardFooter, CardTitle } from "@/components/ui/Card";
import AddCard from "../cards/AddCard";
import { CardType } from "models/list";

const OverlayPreviewList = ({
  name,
  cards,
}: {
  name: string;
  cards?: CardType[];
}) => {
  return (
    <Card className="p-3 flex flex-col justify-between gap-y-3 h-fit min-w-60">
      <CardTitle className="w-full cursor-grab">
        <span className="w-full block">{name}</span>
      </CardTitle>
      {cards &&
        cards.length > 0 &&
        cards.map((card, index) => (
          <CardContext className="p-3" key={index}>
            {card.name}
          </CardContext>
        ))}
      <CardFooter>
        <AddCard listIndex={2} placeholder="Add a card" />
      </CardFooter>
    </Card>
  );
};

export default OverlayPreviewList;
