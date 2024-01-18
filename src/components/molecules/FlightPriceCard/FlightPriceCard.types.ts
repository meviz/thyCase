import { ClassificationType } from "@/models/ClassificationType";
import { PriceData } from "@/models/FlightData";

export interface FlightPriceCardProps {
  type: ClassificationType;
  price: PriceData;
  checked?: boolean;
  onClick?: () => void;
}
