import { ClassificationType } from "@/models/ClassificationType";

export type PassengerFormData = {
  classificationType: ClassificationType;
  passengerCount: number;
};

export interface PassengerNumberFormRef {
  getValue: () => PassengerFormData;
}

export interface PassengerNumberFormProps {
  value?: PassengerFormData;
  onChange?: (value: PassengerFormData) => void;
}
