import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SearchInputData {
  key: string;
  value: string;
}

export interface SearchInputProps {
  onChange?: (value: string) => void;
  value?: SearchInputData;
  data?: SearchInputData[];
  icon?: IconProp;
  placeholder?: string;
}
