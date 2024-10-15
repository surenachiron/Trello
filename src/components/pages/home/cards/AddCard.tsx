import { FormEvent, useState } from "react";

import { useAppDispatch } from "@/hooks/Redux";
import { addCard } from "@/store/reducers/lists";
import ToggleButton from "@/components/ui/Buttons/ToggleButton";
import AddForm from "@/components/ui/AddForm";

const AddCard = ({
  listIndex,
  placeholder,
}: {
  listIndex: number;
  placeholder: string;
}) => {
  const dispatch = useAppDispatch();
  const [isAddVisible, setIsAddVisible] = useState(false);

  function onAddCard(event: FormEvent) {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    const cardName = formData.elements.namedItem("name") as HTMLInputElement;
    dispatch(
      addCard({
        listIndex,
        id: Date.now(),
        name: cardName.value,
        description: cardName.value,
        status: "To do",
      }),
    );
    cardName.value = "";
  }

  return isAddVisible ? (
    <AddForm
      setIsVisible={() => setIsAddVisible(false)}
      onAdd={onAddCard}
      className="w-full p-0 text-black"
    />
  ) : (
    <ToggleButton
      placeholder={placeholder}
      onClick={() => setIsAddVisible(true)}
      className="bg-transparent w-full justify-start p-1"
    />
  );
};

export default AddCard;
