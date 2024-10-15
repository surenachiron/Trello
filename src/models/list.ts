export type colors =
  | "primary"
  | "lime"
  | "orange"
  | "red"
  | "yellow"
  | "purple"
  | "magenta"
  | "teal"
  | "green"
  | "dark";

export type CardType = {
  id: number;
  name: string;
  description?: string;
  status?: "Done" | "To do" | "In progress";
};

export type ListType = {
  id: number;
  name: string;
  color?: colors;
  cards: CardType[];
};
