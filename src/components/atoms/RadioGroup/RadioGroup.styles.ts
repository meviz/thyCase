import { createUseStyles } from "react-jss";
import { RadioStyleProps } from "./RadioGroup.types";
import { Theme } from "@/utils/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
  radioGroupWrapper: ({ layout, colNumber }: RadioStyleProps) => ({
    display: "flex",
    flexDirection: layout === "vertical" ? "column" : "row",
    alignItems: "center",
  }),
  radioItem: ({ colNumber }: RadioStyleProps) => ({
    display: "flex",
    alignItems: "center",
    width: colNumber ? `${100 / colNumber}` : "100%",
    marginBottom: theme.space.small,
    padding: `0 ${theme.space.small}`,
    cursor: "pointer",
    "& input": {
      margin: "0 5px 0 0",
      cursor: "inherit",
    },
    "& label": {
      fontSize: theme.font.small,
      lineHeight: 0,
      cursor: "inherit",
    },
  }),
}));
