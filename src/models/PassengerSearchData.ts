import { ClassificationType } from "./ClassificationType";

export type PassengerSearchData = {
  originCity: string;
  destinationCity: string;
  classificationType: ClassificationType;
  passengerCount: number;
};
