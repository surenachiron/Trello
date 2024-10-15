import { FormEvent, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/Buttons/Button";
import { cn } from "@/lib/utils";

interface AddFormProps {
  setIsVisible: () => void;
  onAdd: (event: FormEvent) => void;
  className?: string;
}

const AddForm = ({ onAdd, setIsVisible, className }: AddFormProps) => {
  const addInputRef = useRef<HTMLFormElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      addInputRef.current &&
      !addInputRef.current.contains(event.target as Node)
    ) {
      setIsVisible();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      className={cn("w-60 bg-black p-2 rounded-md", className)}
      ref={addInputRef}
      onSubmit={onAdd}
    >
      <input
        type="text"
        placeholder="Enter list name..."
        name="name"
        required
        className="rounded-md w-full mb-2 py-1 px-2 focus:border-primary focus:outline-primary text-black"
        autoFocus={true}
      />
      <div className="flex items-center gap-x-2">
        <Button className="contained px-4 py-2" type="submit">
          Add list
        </Button>
        <Button className="bg-transparent p-0">
          <IoMdClose color="white" size={25} onClick={() => setIsVisible()} />
        </Button>
      </div>
    </form>
  );
};

export default AddForm;
