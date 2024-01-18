import { useMemo, useState } from "react";
import { useStyles } from "./FlightList.styles";
import { Button } from "@/components/atoms";
import FlightListItem from "../FlightListItem";
import { useAppSelector } from "@/redux/hooks";
import { sortByPrice, sortByTime } from "@/utils/util";

const FlightList = () => {
  const classes = useStyles();
  const flights = useAppSelector((state) => state.flight.flights);
  const [flightsState, setFlightsState] = useState(sortByPrice(flights));

  const handleSortByPriceClick = () => {
    setFlightsState(sortByPrice(structuredClone(flights)));
  };
  const handleSortByTimeClick = () => {
    setFlightsState(sortByTime(structuredClone(flights)));
  };

  const listHeader = useMemo(
    () => (
      <div className={classes.listHeader}>
        <span>Sıralama Kriteri</span>
        <Button
          label="Ekonomi Ücreti"
          type="bordered"
          onClick={handleSortByPriceClick}
          size="small"
          radius={5}
        />
        <Button
          label="Kalkış Saati"
          type="bordered"
          onClick={handleSortByTimeClick}
          size="small"
          radius={5}
        />
      </div>
    ),
    []
  );

  const listContent = useMemo(
    () => (
      <div className={classes.listContent}>
        {flightsState.map((flight) => (
          <FlightListItem key={flight.id} flightData={flight} />
        ))}
      </div>
    ),
    [flightsState]
  );

  return (
    <div className={classes.listWrapper}>
      {listHeader}
      {listContent}
    </div>
  );
};

export default FlightList;
