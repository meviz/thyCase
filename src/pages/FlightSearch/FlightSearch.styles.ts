import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  banner: {
    textAlign: "center",
  },
  searchWrapper: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "repeat(5,auto)",
    alignItems: "stretch",
    gap: theme.space.small,
    padding: theme.space.medium,
    backgroundColor: "rgba(96,105,119,0.6)",
    justifyContent: "center",

    '& [class*="input"]': {
      height: "100%",
    },
  },
}));
