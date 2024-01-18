import { FlightData } from "@/models/FlightData";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export const convertTimeToDate = (time: string): Date => {
  const [hour, minute] = time.split(":");
  const date = new Date(0, 0, 0, parseInt(hour, 10), parseInt(minute, 10));

  return date;
};

export const sortByPrice = (data: FlightData[]): FlightData[] => {
  const clonedData: FlightData[] = structuredClone(data);
  return clonedData.sort(
    (a, b) =>
      a.fareCategories.ECONOMY.subcategories[0].price.amount -
      b.fareCategories.ECONOMY.subcategories[0].price.amount
  );
};

export const sortByTime = (data: FlightData[]): FlightData[] => {
  const clonedData: FlightData[] = structuredClone(data);
  return clonedData.sort((a, b) => {
    const aTime: any = convertTimeToDate(a.departureDateTimeDisplay);
    const bTime: any = convertTimeToDate(b.departureDateTimeDisplay);
    return aTime - bTime;
  });
};

export const addFontawesomeIcons = () => {
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => (Icons as any)[icon]);

  library.add(...iconList);
};
