import { createUseStyles } from "react-jss";
import { ButtonProps } from "./Button.types";
import { Theme } from "@/utils/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
  button: (props: Omit<ButtonProps, "onClick">) => ({
    padding: `${theme.space[props.size!]}`,
    background: {
      primary: theme.colors.red,
      secondary: theme.colors.darkBlue,
      ghost: theme.colors.lightGray,
      bordered: "transparent",
    }[props.type],
    outline: "none",
    boxShadow: "none",
    border:
      props.type === "bordered" ? `1px solid ${theme.colors.white}` : "none",
    cursor: props.disabled ? "unset" : "pointer",
    fontSize: theme.font[props.size!],
    overflow: "hidden",
    color: props.type !== "ghost" ? theme.colors.white : theme.colors.darkGray,
    transition: "all .1s linear",
    ...(props.radius && { borderRadius: props.radius }),
    "&:not(:disabled):hover": {
      boxShadow: `inset 1px 1px 5px ${theme.colors.darkBlue}ff`,
    },
    "&:disabled": {
      backgroundColor: theme.colors.lightGray,
      color: theme.colors.darkGray,
    },
  }),
}));
