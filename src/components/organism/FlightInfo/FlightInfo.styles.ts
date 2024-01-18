import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  flightInfoWrapper: {
    "& .title": {
      width: "200px",
      padding: `${theme.space.small} 0`,
      backgroundColor: theme.colors.red,
      textAlign: "center",
      color: theme.colors.white,
    },
    "& .flight-info": {
      fontSize: "36px",
      marginTop: theme.space.small,
      marginBottom: theme.space.large,
    },
  },
}));
