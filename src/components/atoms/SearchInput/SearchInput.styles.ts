import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    outline: "none",
    border: "none",
    padding: `${theme.space.medium} ${theme.space.medium} ${theme.space.medium} 40px `,
    fontSize: theme.font.medium,
    fontWeight: "bold",
  },
  icon: {
    color: theme.colors.darkBlue,
    position: "absolute",
    left: "10px",
    fontSize: theme.font.large,
  },
}));
