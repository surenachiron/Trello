import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
import { ListType } from "models/list";
import { AddCardType } from "./types";

type ListsState = ListType[];

const initialState: ListsState = [];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), name: action.payload, cards: [] });
    },
    deleteList: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      return state.filter((list) => list.id !== action.payload);
    },
    moveList: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>,
    ) => {
      const { oldIndex, newIndex } = action.payload;
      const [movedList] = state.splice(oldIndex, 1);
      state.splice(newIndex, 0, movedList);
    },
    addCard: (state, action: PayloadAction<AddCardType>) => {
      const list = state.find((list) => list.id === action.payload.listIndex);
      if (list) {
        list.cards = list.cards || [];
        list.cards!.push({
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          status: action.payload.status,
        });
      }
    },
    deleteCard: (
      state,
      action: PayloadAction<{ listIndex: number; cardIndex: number }>,
    ) => {
      const list = state.find((list) => list.id === action.payload.listIndex);
      if (list) {
        list.cards = list.cards!.filter(
          (card) => card.id !== action.payload.cardIndex,
        );
      }
    },
    moveCard: (
      state,
      action: PayloadAction<{
        oldListIndex: number;
        newListIndex: number;
        oldCardIndex: number;
        newCardIndex: number;
      }>,
    ) => {
      const { oldListIndex, newListIndex, oldCardIndex, newCardIndex } =
        action.payload;
      const oldList = state.find((list) => list.id === oldListIndex);
      const newList = state.find((list) => list.id === newListIndex);
      if (oldList && newList) {
        const movedCard = oldList.cards.splice(oldCardIndex, 1)[0];
        newList.cards.splice(newCardIndex, 0, movedCard);
      }
    },
  },
});

export const { addList, deleteList, addCard, deleteCard, moveList, moveCard } =
  listsSlice.actions;

export const selectLists = (state: RootState) => state.lists;

export default listsSlice.reducer;
