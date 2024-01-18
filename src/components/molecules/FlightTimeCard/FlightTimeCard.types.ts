export interface FlightTimeData {
  time: string;
  shortCityName: string;
  city: string;
}

export interface FlightTimeCardProps {
  destinationTimeData: FlightTimeData;
  originTimeData: FlightTimeData;
  flightTime: string;
}
