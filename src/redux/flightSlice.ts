import { ClassificationType } from "@/models/ClassificationType";
import { FlightData, SubCategory } from "@/models/FlightData";
import { PassengerSearchData } from "@/models/PassengerSearchData";
import { StorageApi } from "@/utils/storageApi";
import { createSlice } from "@reduxjs/toolkit";

export interface FlightContext {
  flights: FlightData[];
  activeFlight?: FlightData & { classificationType: ClassificationType };
  selectedFlightCategory?: SubCategory;
  passengerSearchData?: PassengerSearchData;
  isPromotionActive: boolean;
}

const initialState: FlightContext = {
  flights: [],
  isPromotionActive: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setPassengerSearchData: (
      state: FlightContext,
      { payload }: { payload: PassengerSearchData }
    ) => {
      state.passengerSearchData = payload;
    },
    setIsPromotionActive: (
      state: FlightContext,
      { payload }: { payload: boolean }
    ) => {
      state.isPromotionActive = payload;
    },
    setFlights: (
      state: FlightContext,
      { payload }: { payload: FlightData[] }
    ) => {
      state.flights = payload;
      StorageApi.setItem("flights", payload);
    },
    setActiveFlight: (
      state: FlightContext,
      {
        payload,
      }: { payload: FlightData & { classificationType: ClassificationType } }
    ) => {
      state.activeFlight = payload;
    },
    setSelectedFlightCategory: (
      state: FlightContext,
      { payload }: { payload: SubCategory }
    ) => {
      state.selectedFlightCategory = payload;
    },
    resetFlightsData: (state: FlightContext) => {
      state.activeFlight = initialState.activeFlight;
      state.flights = initialState.flights;
      state.isPromotionActive = initialState.isPromotionActive;
      state.passengerSearchData = initialState.passengerSearchData;
      state.selectedFlightCategory = initialState.selectedFlightCategory;
    },
  },
});

export const flightActions = flightSlice.actions;
export const flightReducer = flightSlice.reducer;
