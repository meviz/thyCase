import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  categoryWrapper: {
    background: theme.colors.lighterGray,
    "& .category-header": {
      padding: `${theme.space.small} ${theme.space.small} ${theme.space.large} ${theme.space.small}`,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    "& .category-header span": {
      display: "flex",
      alignItems: "flex-start",
      fontWeight: "bolder",
      fontSize: theme.font.large,
    },
    "& .category-header span i": {
      fontSize: theme.font.small,
      marginRight: "5px",
    },
    "& .category-content": {
      display: "flex",
      flexDirection: "column",
      border: `1px solid ${theme.colors.lightGray}`,
      background: theme.colors.white,
      minHeight: "200px",
    },
    "& .category-content-item": {
      padding: theme.space.small,
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      fontSize: theme.font.small,
    },
    "& .category-action": {
      width: "100% !important",
    },
  },
}));
