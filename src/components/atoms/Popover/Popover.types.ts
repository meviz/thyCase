import { PropsWithChildren, ReactNode } from "react";

export type PopoverProps = PropsWithChildren & {
  position: "left" | "right" | "top" | "bottom";
  content: ReactNode;
  width?: number;
  visible?: boolean;
  onClose?: () => void;
};
