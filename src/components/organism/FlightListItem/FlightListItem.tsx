import { Card } from "@/components/atoms";
import { useStyles } from "./FlightListItem.styles";
import { FlightPriceCard, FlightTimeCard } from "@/components/molecules";
import { ClassificationType } from "@/models/ClassificationType";
import { FlightListItemProps } from "./FlightListItem.types";
import FareCategoryItem from "@/components/molecules/FareCategoryItem/FareCategoryItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { flightActions } from "@/redux/flightSlice";

const FlightListItem = ({ flightData, id }: FlightListItemProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeFlight = useAppSelector((state) => state.flight.activeFlight);

  const handleClassificationClick = (type: ClassificationType) => {
    dispatch(
      flightActions.setActiveFlight({ ...flightData, classificationType: type })
    );
  };

  return (
    <>
      <div className={classes.listItemWrapper} key={id}>
        <FlightTimeCard
          destinationTimeData={{
            city: flightData.destinationAirport.city.name,
            shortCityName: flightData.destinationAirport.city.code,
            time: flightData.arrivalDateTimeDisplay,
          }}
          originTimeData={{
            city: flightData.originAirport.city.name,
            shortCityName: flightData.originAirport.city.code,
            time: flightData.departureDateTimeDisplay,
          }}
          flightTime={flightData.flightDuration}
        />
        <FlightPriceCard
          type={ClassificationType.ECONOMY}
          price={flightData.fareCategories.ECONOMY.subcategories[0].price}
          checked={
            activeFlight?.id === flightData.id &&
            activeFlight?.classificationType === ClassificationType.ECONOMY
          }
          onClick={() => handleClassificationClick(ClassificationType.ECONOMY)}
        />
        <FlightPriceCard
          type={ClassificationType.BUSINESS}
          price={flightData.fareCategories.BUSINESS.subcategories[0].price}
          checked={
            activeFlight?.id === flightData.id &&
            activeFlight?.classificationType === ClassificationType.BUSINESS
          }
          onClick={() => handleClassificationClick(ClassificationType.BUSINESS)}
        />
      </div>
      {activeFlight && activeFlight.id === flightData.id && (
        <Card id={flightData.id}>
          <div className={classes.flightDetailCard}>
            {flightData.fareCategories[
              activeFlight.classificationType
            ].subcategories.map((subcategory) => (
              <FareCategoryItem
                data={subcategory}
                classificationType={activeFlight.classificationType}
              />
            ))}
          </div>
        </Card>
      )}
    </>
  );
};

export default FlightListItem;
