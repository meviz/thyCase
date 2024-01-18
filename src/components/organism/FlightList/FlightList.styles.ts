import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  listWrapper: {
    width: "100%",
    marginTop: theme.space.large,

    border: `1px solid ${theme.colors.lightGray}`,
  },
  listHeader: {
    borderRadius: "5px 5px 0px 0px",
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gridGap: theme.space.small,
    gridTemplateRows: "1fr",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
    padding: theme.space.small,
    backgroundColor: theme.colors.darkBlue,
    "& > span": {
      color: theme.colors.white,
    },
  },
  listContent: {
    display: "grid",
    gridTemplateRows: "auto",
    gap: theme.space.small,
    padding: theme.space.small,
    backgroundColor: theme.colors.gray,
    width: "100%",
  },
}));
