import { Card } from "@/components/atoms";
import { FlightTimeCardProps } from "./FlightTimeCard.types";
import { useStyles } from "./FlightTimeCard.styles";

const FlightTimeCard = ({
  destinationTimeData,
  originTimeData,
  flightTime,
}: FlightTimeCardProps) => {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.flightCardWrapper}>
        <div className={classes.flightDetailInfoWrapper}>
          <div className={classes.flightDetailInfo}>
            <b>{destinationTimeData.time}</b>
            <span>{destinationTimeData.shortCityName}</span>
            <i>{destinationTimeData.city}</i>
          </div>
          <div className={classes.line} />
          <div className={classes.flightDetailInfo}>
            <b>{originTimeData.time}</b>
            <span>{originTimeData.shortCityName}</span>
            <i>{originTimeData.city}</i>
          </div>
        </div>
        <div className={classes.flightTimeWrapper}>
          <span>Uçuş Süresi</span>
          <b>{flightTime}</b>
        </div>
      </div>
    </Card>
  );
};

export default FlightTimeCard;
