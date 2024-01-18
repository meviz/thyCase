import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  flightCardWrapper: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    gridTemplateRows: "auto",
    gap: theme.space.large,
    alignItems: "center",
  },
  flightDetailInfoWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  flightDetailInfo: {
    display: "flex",
    flexDirection: "column",
    "&:nth-child(3)": {
      textAlign: "right",
    },
    "& i": {
      fontStyle: "normal",
      fontSize: theme.font.small,
    },
  },
  line: {
    width: "100%",
    height: "1px",
    margin: "0px 5px",
    backgroundColor: theme.colors.darkGray,
  },
  flightTimeWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      fontSize: theme.font.small,
    },
  },
}));
