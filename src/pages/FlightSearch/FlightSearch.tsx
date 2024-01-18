import { useEffect, useRef, useState } from "react";
import { getFlights } from "@/utils/flightApi";
import { ClassificationType } from "@/models/ClassificationType";
import { Button, MessageModal, SearchInput } from "@/components/atoms";
import { Calendar } from "@/components/molecules";
import { MainLayout } from "@/components/layouts";
import { useStyles } from "./FlightSearch.styles";
import { PassengerNumberButton } from "@/components/organism";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { flightActions } from "@/redux/flightSlice";
import { PassengerFormData } from "@/components/molecules/PassengerForm/PassengerForm.types";
import { PassengerSearchData } from "@/models/PassengerSearchData";

const FlightSearch = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const formRef = useRef<PassengerSearchData>({
    originCity: "",
    destinationCity: "",
    classificationType: ClassificationType.ECONOMY,
    passengerCount: 1,
  });
  const [modalMessage, setMessageModal] = useState<string | undefined>("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(flightActions.resetFlightsData());
  }, []);

  const handleOriginCityChange = (value: string) => {
    formRef.current.originCity = value;
  };

  const handleDestinationCityChange = (value: string) => {
    formRef.current.destinationCity = value;
  };

  const handlePassengerNumberChange = (value: PassengerFormData) => {
    formRef.current.passengerCount = value.passengerCount;
    formRef.current.classificationType = value.classificationType;
  };

  const handleSubmit = async () => {
    const { originCity, destinationCity, passengerCount, classificationType } =
      formRef.current!;

    if (originCity && destinationCity) {
      const flights = await getFlights(originCity, destinationCity);

      if (!flights.length) {
        setMessageModal("Herhangi bir uçuş bulunamadı.");
      } else {
        navigate("list");
        dispatch(
          flightActions.setPassengerSearchData({
            originCity: flights[0].originAirport.city.name,
            destinationCity: flights[0].destinationAirport.city.name,
            passengerCount,
            classificationType,
          })
        );
        dispatch(flightActions.setFlights(flights));
      }
    } else {
      setMessageModal("Lütfen uçuşunuz için gidiş/varış noktasını seçin.");
    }
  };

  const handleMessageModalClose = () => {
    setMessageModal(undefined);
  };

  return (
    <MainLayout type="dark" center>
      <div className={classes.banner}>
        <h1>Merhaba</h1>
        <h2>Nereyi keşfetmek istersiniz?</h2>
      </div>
      <div className={classes.searchWrapper}>
        <SearchInput
          icon={"plane-departure"}
          placeholder="Nereden"
          onChange={handleOriginCityChange}
        />
        <SearchInput
          icon={"plane-arrival"}
          placeholder="Nereye"
          onChange={handleDestinationCityChange}
        />
        <Calendar />
        <PassengerNumberButton onChange={handlePassengerNumberChange} />
        <Button
          icon="angle-right"
          type="primary"
          size="medium"
          onClick={() => handleSubmit()}
        />
      </div>
      <MessageModal
        message={modalMessage!}
        visible={!!modalMessage}
        onClose={handleMessageModalClose}
      />
    </MainLayout>
  );
};

export default FlightSearch;
