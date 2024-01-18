import { MainLayout } from "@/components/layouts";
import FlightInfo from "@/components/organism/FlightInfo";
import FlightList from "@/components/organism/FlightList";

const Flights = () => {
  return (
    <MainLayout type="light">
      <FlightInfo />
      <FlightList />
    </MainLayout>
  );
};

export default Flights;
