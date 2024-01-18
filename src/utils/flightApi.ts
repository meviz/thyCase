import { FlightData } from "@/models/FlightData";
import axios from "axios";

export const getFlights = async (
  originAirport: string,
  destinationAirport: string
) => {
  return axios.get("/flights.json").then((response: any): FlightData[] => {
    return response.data.flights
      .filter(
        (item: FlightData) =>
          item.originAirport.city.name.toLocaleLowerCase() ===
            originAirport.toLocaleLowerCase() &&
          item.destinationAirport.city.name.toLocaleLowerCase() ===
            destinationAirport.toLocaleLowerCase()
      )
      .map((item: FlightData) => ({
        ...item,
        id: `${item.departureDateTimeDisplay}-${item.arrivalDateTimeDisplay}`,
      }));
  });
};
