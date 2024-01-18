import { Switch } from "@/components/atoms";
import { useStyles } from "./FlightInfo.styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { flightActions } from "@/redux/flightSlice";

const FlightInfo = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isPromotionActive = useAppSelector(
    (state) => state.flight.isPromotionActive
  );
  const passengerSearchData = useAppSelector(
    (state) => state.flight.passengerSearchData
  );

  const handlePromotionActive = (value: boolean) => {
    dispatch(flightActions.setIsPromotionActive(value));
  };

  return (
    <div className={classes.flightInfoWrapper}>
      <div className="title">Uçuş</div>
      <div className="flight-info">
        {" "}
        {`${passengerSearchData?.originCity} - ${passengerSearchData?.destinationCity}, ${passengerSearchData?.passengerCount} Yolcu`}
      </div>
      <Switch
        label="Promosyon Kodu"
        onChange={handlePromotionActive}
        active={isPromotionActive}
      />
      {isPromotionActive && (
        <>
          <p>
            Promosyon kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini
            %50 indirimle satın alabilirsiniz
          </p>
          <p>
            Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
            yapılamamaktadır.
          </p>
        </>
      )}
    </div>
  );
};

export default FlightInfo;
