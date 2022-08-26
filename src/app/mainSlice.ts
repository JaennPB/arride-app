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
  rideType: "ride" | "package";
}

const initialState: MainState = {
  origin: undefined,
  destination: undefined,
  ETA: undefined,
  rideType: "ride",
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
    setRideType: (state, action: PayloadAction<"ride" | "package">) => {
      state.rideType = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setETA, setRideType } =
  mainSlice.actions;
export default mainSlice.reducer;
