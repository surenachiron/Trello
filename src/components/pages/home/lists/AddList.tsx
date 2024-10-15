import { FormEvent, useState } from "react";

import { useAppDispatch } from "@/hooks/Redux";
import { addList } from "@/store/reducers/lists";
import ToggleButton from "@/components/ui/Buttons/ToggleButton";
import AddForm from "@/components/ui/AddForm";

const AddList = ({ placeholder }: { placeholder: string }) => {
  const dispatch = useAppDispatch();
  const [isAddVisible, setIsAddVisible] = useState(false);

  function onAddList(event: FormEvent) {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    const listName = formData.elements.namedItem("name") as HTMLInputElement;
    dispatch(addList(listName.value));
    listName.value = "";
  }

  return isAddVisible ? (
    <AddForm
      setIsVisible={() => setIsAddVisible(false)}
      onAdd={onAddList}
      className="h-fit min-w-60"
    />
  ) : (
    <ToggleButton
      className="text-nowrap"
      placeholder={placeholder}
      onClick={() => setIsAddVisible(true)}
    />
  );
};

export default AddList;
