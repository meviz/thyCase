import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  flightPriceWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    '& [class*="radio"]': {
      marginBottom: "0 !important",
    },
  },
  priceInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      fontSize: theme.font.small,
    },
  },
  classificationWrapper: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "21px",
    border: `1px solid ${theme.colors.darkGray}`,
    backgroundColor: theme.colors.white,
    position: "relative",
    marginRight: theme.space.small,
    "& span": {
      position: "absolute",
      width: "14px",
      height: "14px",
      left: "2px",
      top: "2px",
      borderRadius: "16px",
      background: theme.colors.lightBlue,
    },
  },
}));
