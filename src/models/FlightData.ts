export interface CountryData {
  code: string;
  name: string;
}

export interface CityData {
  code: string;
  name: string;
}

export interface PriceData {
  amount: number;
  currency: string;
}

export interface AirportData {
  name: string;
  code: string;
  city: CityData;
  country: CountryData;
}
export interface FareCategories {
  BUSINESS: { subcategories: SubCategory[] };
  ECONOMY: { subcategories: SubCategory[] };
}

export enum StatusType {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
}

export const BrandCode = {
  ecoFly: "Eco Fly",
  extraFly: "Extra Fly",
  primeFly: "Prime Fly",
};

export interface SubCategory {
  brandCode: keyof typeof BrandCode;
  price: PriceData;
  order: number;
  status: StatusType;
  rights: string[];
}

export interface FlightData {
  id: string;
  originAirport: AirportData;
  destinationAirport: AirportData;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategories;
}
