import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  formWrapper: {
    color: theme.colors.darkGray,
    fontWeight: "normal",
    "& .header": {
      marginBottom: "24px",
    },
    "& .classification-type": {
      marginBottom: theme.space.medium,
    },
    "& .passenger-number": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));
