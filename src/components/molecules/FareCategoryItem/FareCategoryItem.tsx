import React, { useMemo } from "react";
import { FareCategoryItemProps } from "./FareCategoryItem.types";
import { useStyles } from "./FareCategoryItem.styles";
import { BrandCode, StatusType } from "@/models/FlightData";
import { Button } from "@/components/atoms";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ClassificationType } from "@/models/ClassificationType";
import { flightActions } from "@/redux/flightSlice";
import { useNavigate } from "react-router-dom";

const FareCategoryItem = ({
  data,
  classificationType,
}: FareCategoryItemProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isPromotionActive = useAppSelector(
    (state) => state.flight.isPromotionActive
  );
  const disabled = useMemo(
    () =>
      (isPromotionActive && data.brandCode !== "ecoFly") ||
      (isPromotionActive && classificationType === ClassificationType.BUSINESS),
    [isPromotionActive, data.brandCode, classificationType]
  );

  const handleSelectFlight = () => {
    dispatch(flightActions.setSelectedFlightCategory(data));
    if (data.status === StatusType.AVAILABLE) {
      navigate("/complete");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className={classes.categoryWrapper}>
      <div className="category-header">
        <span>{BrandCode[data.brandCode]}</span>
        <span>
          <i>{data.price.currency}</i>
          {data.brandCode === "ecoFly" &&
          isPromotionActive &&
          classificationType !== ClassificationType.BUSINESS
            ? data.price.amount / 2
            : data.price.amount}
        </span>
      </div>
      <div className="category-content">
        {data.rights.map((right) => (
          <div className="category-content-item">{right}</div>
        ))}
      </div>
      <Button
        className="category-action"
        label="Uçuşu Seç"
        onClick={() => handleSelectFlight()}
        type="primary"
        disabled={disabled}
      />
    </div>
  );
};

export default FareCategoryItem;
