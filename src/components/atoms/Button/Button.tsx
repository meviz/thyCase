import clsx from "clsx";
import { useStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  type = "primary",
  size = "medium",
  label,
  icon,
  radius,
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  const classes = useStyles({ size, type, label, icon, radius, disabled });

  return (
    <button
      className={clsx(rest.className, classes.button)}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
