import { PropsWithChildren, ReactNode } from "react";
import { Container } from "@/components/atoms";
import { useStyles } from "./MainLayout.styles";
import { MainLayoutProps } from "./MainLayout.types";

const MainLayout = ({
  children,
  type,
  center,
}: {
  children: ReactNode;
} & PropsWithChildren<MainLayoutProps>) => {
  const classes = useStyles({ type, center });

  return (
    <Container className={classes.layoutWrapper} align="center" fluid>
      <div className={classes.header}>turkishairlines.com</div>
      <Container
        className={classes.content}
        fluid
        {...(center && { align: "center", justify: "center" })}
      >
        {children}
      </Container>
    </Container>
  );
};

export default MainLayout;
