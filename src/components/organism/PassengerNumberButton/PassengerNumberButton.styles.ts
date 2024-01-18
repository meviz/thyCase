import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  passengerNumberButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkBlue,
    padding: theme.space.small,
    height: "100%",
    width: "120px",
    position: "relative",
    cursor: "pointer",
    "& span": {
      position: "absolute",
      top: theme.space.small,
      right: theme.space.small,
      fontWeight: "bolder",
    },
  },
}));
