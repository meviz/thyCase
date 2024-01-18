import { Button } from "@/components/atoms";
import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect, useNavigate } from "react-router-dom";
import { useStyles } from "./FlightError.styles";
import { useAppDispatch } from "@/redux/hooks";
import { flightActions } from "@/redux/flightSlice";

const FlightError = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(flightActions.resetFlightsData());
    navigate("/");
  };

  return (
    <MainLayout type="light">
      <div className={classes.errorHeader}>
        <FontAwesomeIcon icon="times-circle" />
        <b>Kabin seçiminiz tamamlanamadı.</b>
      </div>
      <div className={classes.action}>
        <Button onClick={handleClick} type="primary" label="Başa Dön" />
      </div>
    </MainLayout>
  );
};

export default FlightError;
