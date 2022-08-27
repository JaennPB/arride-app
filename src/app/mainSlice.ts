import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "react-native-google-places-autocomplete";

type CoordsData = {
  coords: Point | undefined;
  description: string | undefined;
};

type MatrixInfo = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
};

interface MainState {
  origin: CoordsData | undefined;
  destination: CoordsData | undefined;
  infoMatrix: MatrixInfo | undefined;
  rideType: "ride" | "package";
}

const initialState: MainState = {
  origin: undefined,
  destination: undefined,
  infoMatrix: undefined,
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
    setMatrix: (state, action: PayloadAction<MatrixInfo>) => {
      state.infoMatrix = action.payload;
    },
    setRideType: (state, action: PayloadAction<"ride" | "package">) => {
      state.rideType = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setMatrix, setRideType } =
  mainSlice.actions;
export default mainSlice.reducer;
