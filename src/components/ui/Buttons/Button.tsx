import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "contained" | "outline";
}

export const Button = ({
  variant = "contained",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center rounded-lg px-12 py-4 text-sm font-semibold leading-snug disabled:border-none disabled:bg-bg-muted disabled:text-fg-muted",
        {
          "border border-primary text-primary hover:bg-primary hover:text-gray focus:text-gray focus:bg-primary focus:outline-none":
            variant === "outline",
          "bg-primary transition-shadow": variant === "contained",
        },
        className,
      )}
      {...props}
    />
  );
};
