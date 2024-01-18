import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  popoverWrapper: { position: "relative" },
  popoverContent: ({ width }: { width?: number }) => ({
    position: "absolute",
    boxShadow: `1px 1px 5px ${theme.colors.darkBlue}`,
    padding: theme.space.small,
    backgroundColor: theme.colors.white,
    ...(width && { width }),
  }),

  left: {
    right: "100%",
    bottom: "50%",
    marginRight: "10px",
  },
  right: {
    left: "100%",
    marginLeft: "10px",
    bottom: "50%",
  },
  top: {
    bottom: "100%",
    marginBottom: "10px",
    right: "50%",
    transform: "translate(50%)",
  },
  bottom: {
    top: "100%",
    marginTop: "10px",
    right: "50%",
    transform: "translate(50%)",
  },
}));
