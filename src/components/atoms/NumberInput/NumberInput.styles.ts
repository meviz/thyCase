import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    "& span": {
      padding: theme.space.small,
      display: "inline-block",
      minWidth: "50px",
      textAlign: "center",
    },
  },
}));
