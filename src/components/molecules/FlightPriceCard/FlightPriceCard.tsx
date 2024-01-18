import { Card, RadioGroup } from "@/components/atoms";
import { FlightPriceCardProps } from "./FlightPriceCard.types";
import { useStyles } from "./FlightPriceCard.styles";
import clsx from "clsx";
import { useAppSelector } from "@/redux/hooks";
import { ClassificationType } from "@/models/ClassificationType";

const FlightPriceCard = ({
  type,
  price,
  checked = false,
  onClick,
}: FlightPriceCardProps) => {
  const classes = useStyles();
  const isPromotionActive = useAppSelector(
    (state) => state.flight.isPromotionActive
  );
  return (
    <Card onClick={onClick}>
      <div className={classes.flightPriceWrapper}>
        <div className={classes.classificationWrapper}>
          <div className={classes.checkbox}>{checked && <span />}</div>
          <b>{type}</b>
        </div>
        <div className={classes.priceInfo}>
          <span>Yolcu Başına</span>
          <b>{`${price.currency} ${
            isPromotionActive && type !== ClassificationType.BUSINESS
              ? price.amount / 2
              : price.amount
          }`}</b>
        </div>
      </div>
    </Card>
  );
};

export default FlightPriceCard;
