import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IHeading {
  id: "firstName" | "lastName" | "name" | "title" | "city" | "email";
  text: string;
}

const initialState = {
  headings: [
    {
      id: "name",
      text: "Name",
    },
    {
      id: "title",
      text: "Title",
    },
    {
      id: "email",
      text: "Email",
    },
    {
      id: "city",
      text: "City",
    },
  ] as IHeading[],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    moveHeader: (
      state,
      action: PayloadAction<{ currentId: string; targetId: string }>
    ) => {
      const currentIndex = state.headings.findIndex((heading) => {
        return heading.id === action.payload.currentId;
      });
      const targetIndex = state.headings.findIndex((heading) => {
        return heading.id === action.payload.targetId;
      });

      // Swap current heading and target heading
      const tempHeading = state.headings[currentIndex];
      state.headings[currentIndex] = state.headings[targetIndex];
      state.headings[targetIndex] = tempHeading;
    },
  },
});

export const { moveHeader } = tableSlice.actions;

// Selectors
export const selectHeadings = (state: RootState) => state.table.headings;

export default tableSlice.reducer;
