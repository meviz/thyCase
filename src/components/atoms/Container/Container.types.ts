import { ComponentSize } from "@/models/ComponentSize";
import { PropsWithChildren } from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{
    type?: "dark" | "light";
    size?: ComponentSize;
    justify?: "center" | "flex-start" | "flex-end" | "space-between";
    align?: "center" | "flex-start" | "flex-end" | "stretch";
    fluid?: boolean;
  }>;
