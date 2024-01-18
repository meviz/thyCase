import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  errorHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.space.large,
    fontSize: "36px",
    color: theme.colors.red,
    borderBottom: `1px solid ${theme.colors.lightGray}`,
    "& b": {
      marginLeft: theme.space.large,
      fontSize: theme.font.large,
      color: theme.colors.darkGray,
    },
  },
  action: {
    display: "flex",
    width: "100%",
    flexDirection: "row-reverse",
    marginTop: theme.space.large,
  },
}));
