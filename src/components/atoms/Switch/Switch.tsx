import clsx from "clsx";
import { useStyles } from "./Switch.styles";
import { SwitchProps } from "./Switch.types";
import { useEffect, useState } from "react";
import { useStateCallback } from "@/hooks/useStateCallback";

const Switch = ({ onChange, active = false, label }: SwitchProps) => {
  const classes = useStyles();
  const [activeState, setActiveState] = useStateCallback(active);

  useEffect(() => setActiveState(active), [active]);

  const handleClick = () => {
    setActiveState(!activeState, (value) => {
      onChange && onChange(value);
    });
  };

  return (
    <div className={classes.switchWrapper}>
      {label && <label>{label}</label>}
      <div
        className={clsx(classes.switchContainer, activeState && classes.active)}
        onClick={handleClick}
      >
        <div className="switch-toggle"></div>
      </div>
    </div>
  );
};

export default Switch;
