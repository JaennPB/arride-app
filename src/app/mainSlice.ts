import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "react-native-google-places-autocomplete";

interface MainState {
  origin: Point | undefined;
  destination: Point | undefined;
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
    setOrigin: (state, action: PayloadAction<Point | undefined>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<Point | undefined>) => {
      state.destination = action.payload;
    },
    setETA: (state, action: PayloadAction<number>) => {
      state.ETA = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setETA } = mainSlice.actions;
export default mainSlice.reducer;
