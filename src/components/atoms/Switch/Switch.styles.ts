import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";
import { SwitchProps } from "./Switch.types";

export const useStyles = createUseStyles((theme: Theme) => ({
  switchWrapper: {
    display: "inline-flex",
    alignItems: "center",
    "& label": {
      marginRight: theme.space.small,
      fontWeight: "bolder",
    },
  },
  switchContainer: {
    position: "relative",
    display: "inline-block",
    width: "52px",
    height: "30px",
    background: theme.colors.lightGray,
    borderRadius: `30px`,
    overflow: "hidden",

    "& .switch-toggle": {
      background: theme.colors.white,
      position: "absolute",
      left: "3px",
      top: "3px",
      width: "24px",
      height: "24px",
      borderRadius: `30px`,
      boxShadow: `1px 1px 60px ${theme.colors.darkBlue}dd`,
      transition: "all .1s linear",
    },
  },
  active: {
    background: theme.colors.lightBlue + " !important",
    "& .switch-toggle": {
      transform: "translateX(22px)",
    },
  },
}));
