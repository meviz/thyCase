import { ClassificationType } from "@/models/ClassificationType";
import { SubCategory } from "@/models/FlightData";

export interface FareCategoryItemProps {
  data: SubCategory;
  classificationType: ClassificationType;
}
