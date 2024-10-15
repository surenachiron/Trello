import { IoMdAddCircleOutline } from "react-icons/io";

import { Button } from "@/components/ui/Buttons/Button";
import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  onClick: () => void;
  placeholder: string;
  className?: string;
}

const ToggleButton = ({
  onClick,
  placeholder,
  className,
}: ToggleButtonProps) => (
  <Button
    variant="contained"
    className={cn(
      "h-fit py-2 text-md gap-x-2 hover:bg-gray hover:text-black transition-all",
      className,
    )}
    onClick={onClick}
  >
    <IoMdAddCircleOutline />
    {placeholder}
  </Button>
);

export default ToggleButton;
