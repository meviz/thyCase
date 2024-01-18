import { Theme } from "@/utils/theme";
import { ContainerProps } from "./Container.types";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  containerWrapper: (props: ContainerProps) => ({
    display: "flex",
    flexDirection: "column",
    padding: `${theme.space[props.size ?? "medium"]}`,
    justifyContent: `${props.justify}`,
    alignItems: `${props.align}`,
    width: `${props.fluid ? "100%" : "auto"}`,
  }),
}));
