import { createUseStyles } from "react-jss";
import { MainLayoutProps } from "./MainLayout.types";
import { Theme } from "@/utils/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
  layoutWrapper: (props: MainLayoutProps) => {
    return {
      background: { dark: theme.colors.blue, light: theme.colors.white }[
        props.type
      ],
      height: "100vh",
    };
  },
  header: (props: MainLayoutProps) => ({
    display: "flex",
    width: "100%",
    padding: theme.space.medium,
    fontWeight: "bolder",
    borderBottom: `1px solid ${
      { dark: theme.colors.white, light: theme.colors.darkGray }[props.type]
    }`,
    color: { dark: theme.colors.white, light: theme.colors.darkGray }[
      props.type
    ],
  }),
  content: (props) => ({
    height: "100%",
    color: { dark: theme.colors.white, light: theme.colors.darkGray }[
      props.type
    ],
    overflowY: "auto",
    maxWidth: "1200px",
    paddingBottom: "48px",
  }),
}));
