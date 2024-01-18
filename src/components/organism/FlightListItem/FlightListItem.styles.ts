import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  listItemWrapper: {
    display: "grid",
    gridGap: `${theme.space.small}`,
    gridTemplateColumns: "2fr 1fr 1fr",
  },
  flightDetailCard: {
    display: "grid",
    gap: theme.space.small,
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto",
  },
}));
