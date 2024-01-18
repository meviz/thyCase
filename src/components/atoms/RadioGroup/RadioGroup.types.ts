export interface RadioData {
  key: string;
  label: string;
}

export type RadioLayout = "vertical" | "horizontal";

export interface RadioGroupProps {
  onChange?: (value: RadioData) => void;
  data: RadioData[];
  layout?: RadioLayout;
  colNumber?: number;
  value?: string;
}

export type RadioStyleProps = Pick<RadioGroupProps, "colNumber" | "layout">;
