import clsx from "clsx";
import { useStyles } from "./Container.styles";
import { ContainerProps } from "./Container.types";

const Container = ({
  children,
  size = "medium",
  type = "dark",
  align = "flex-start",
  justify = "flex-start",
  fluid = true,
  ...rest
}: ContainerProps) => {
  const classes = useStyles({ size, type, align, justify, fluid });
  return (
    <div className={clsx(rest.className, classes.containerWrapper)}>
      {children}
    </div>
  );
};

export default Container;
