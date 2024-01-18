import { ComponentSize } from "@/models/ComponentSize";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type: "ghost" | "primary" | "secondary" | "bordered";
  size?: ComponentSize;
  label?: string;
  icon?: IconProp;
  radius?: number;
  disabled?: boolean;
  onClick: () => void;
};
