import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  origin: string | undefined;
  destination: string | undefined;
  ETA: number | undefined;
}

const initialState: MainState = {
  origin: undefined,
  destination: undefined,
  ETA: undefined,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setETA: (state, action: PayloadAction<number>) => {
      state.ETA = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setETA } = mainSlice.actions;
export default mainSlice.reducer;
