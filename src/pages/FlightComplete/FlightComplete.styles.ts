import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  completeHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.space.large,
    fontSize: "36px",
    color: theme.colors.green,
    borderBottom: `1px solid ${theme.colors.lightGray}`,
    "& b": {
      marginLeft: theme.space.large,
      fontSize: theme.font.large,
      color: theme.colors.darkGray,
    },
  },
  totalPrice: {
    display: "flex",
    width: "100%",
    padding: theme.space.large,
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "36px",
    color: theme.colors.darkGray,
    "& b": {
      color: theme.colors.lightBlue,
    },
  },
}));
