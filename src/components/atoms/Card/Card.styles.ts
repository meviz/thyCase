import { Theme, theme } from "@/utils/theme";
import { createUseStyles } from "react-jss";
import { CardProps } from "./Card.types";

export const useStyles = createUseStyles((theme: Theme) => ({
  cardWrapper: ({ size }: CardProps) => ({
    padding: theme.space[size!],
    boxShadow: `0 4px 8px 0 rgba(0,0,0,.05)`,
    backgroundColor: theme.colors.white,
    cursor: "pointer",
  }),
}));
