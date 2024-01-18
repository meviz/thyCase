import React from "react";
import { useStyles } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({ size = "medium", children, onClick, id }: CardProps) => {
  const classes = useStyles({ size });
  return (
    <div onClick={onClick} className={classes.cardWrapper} key={id}>
      {children}
    </div>
  );
};

export default Card;
