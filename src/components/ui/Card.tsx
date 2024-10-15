import { IoMdClose } from "react-icons/io";

import { cn } from "@/lib/utils";
import { colors } from "models/list";
import { Button } from "./Buttons/Button";
import { forwardRef } from "react";

type baseType = {
  className?: string;
  children?: React.ReactNode;
};

type CardType = {
  color?: colors;
} & baseType &
  React.HTMLAttributes<HTMLDivElement>;

type CardTitleType = {
  close?: boolean;
  onClose?: () => void;
} & baseType;

export const Card = forwardRef<HTMLDivElement, CardType>(
  ({ children, className, color = "dark", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `w-60 min-h-24 rounded-lg px-2 py-1 bg-${color}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const CardTitle = ({
  className,
  children,
  close = false,
  onClose,
}: CardTitleType) => {
  return close ? (
    <div className="flex justify-between items-center w-full">
      <h2 className={cn(`text-md font-bold`, className)}>{children}</h2>
      <Button className="p-0 bg-transparent">
        {close && <IoMdClose size={20} onClick={onClose} />}
      </Button>
    </div>
  ) : (
    <h2 className={cn(`text-md font-bold`, className)}>{children}</h2>
  );
};

export const CardContext = forwardRef<HTMLDivElement, CardType>(
  ({ className, children, color = "lime", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex justify-between items-center rounded-lg px-2 py-1",
          `bg-${color}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const CardFooter = ({ className, children }: baseType) => {
  return <div className={className}>{children}</div>;
};
