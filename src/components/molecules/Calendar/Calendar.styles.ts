import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  calendarWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors.darkBlue,
    padding: theme.space.small,
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer",
    height: "100%",
    "& span": {
      userSelect: "none",
      fontSize: theme.font.large,
      marginRight: theme.space.medium,
    },
  },
}));
