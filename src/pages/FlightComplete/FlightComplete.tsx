import { MainLayout } from "@/components/layouts";
import { useStyles } from "./FlightComplete.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

const FlightComplete = () => {
  const classes = useStyles();
  const selectedFlightCategory = useAppSelector(
    (state) => state.flight.selectedFlightCategory
  );
  const passengerSearchData = useAppSelector(
    (state) => state.flight.passengerSearchData
  );
  const isPromotionActive = useAppSelector(
    (state) => state.flight.isPromotionActive
  );

  const getPrice = useCallback(
    () =>
      selectedFlightCategory!.price.amount *
      passengerSearchData!.passengerCount,
    [selectedFlightCategory, passengerSearchData]
  );

  return (
    <MainLayout type="light">
      <div className={classes.completeHeader}>
        <FontAwesomeIcon icon="check-circle" />
        <b>Kabin seçiminiz tamamlandı.</b>
      </div>
      <div className={classes.totalPrice}>
        <span>Toplam tutar</span>
        <b>{`${selectedFlightCategory!.price.currency} ${
          isPromotionActive ? getPrice() / 2 : getPrice()
        }`}</b>
      </div>
    </MainLayout>
  );
};

export default FlightComplete;
