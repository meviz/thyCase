import { Theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  modalWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `${theme.colors.darkBlue}dd`,
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    minWidth: "500px",
    padding: theme.space.medium,
    background: theme.colors.white,
    "& .message-wrapper": {
      display: "flex",
      alignItems: "center",
      "& .message-icon": {
        fontSize: 48,
        color: theme.colors.red,
        marginRight: theme.space.large,
      },
      "& .message-text": {
        fontSize: theme.font.large,
        color: theme.colors.darkGray,
      },
    },
    "& .action-wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: theme.space.large,
    },
  },
}));
