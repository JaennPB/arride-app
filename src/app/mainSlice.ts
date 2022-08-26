import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "react-native-google-places-autocomplete";

type CoordsData = {
  coords: Point | undefined;
  description: string | undefined;
};

interface MainState {
  origin: CoordsData | undefined;
  destination: CoordsData | undefined;
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
    setOrigin: (state, action: PayloadAction<CoordsData>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<CoordsData>) => {
      state.destination = action.payload;
    },
    setETA: (state, action: PayloadAction<number>) => {
      state.ETA = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setETA } = mainSlice.actions;
export default mainSlice.reducer;
