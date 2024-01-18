import { ComponentSize } from "@/models/ComponentSize";
import { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  id?: string;
  size?: ComponentSize;
  onClick?: () => void;
}>;
