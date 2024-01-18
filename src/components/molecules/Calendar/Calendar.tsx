import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./Calendar.styles";

const Calendar = () => {
  const classes = useStyles();
  return (
    <div className={classes.calendarWrapper}>
      <span>Tarih</span>
      <FontAwesomeIcon icon="calendar" />
    </div>
  );
};

export default Calendar;
