import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FlightComplete, FlightError, Page404 } from "./pages";
import { addFontawesomeIcons } from "./utils/util";

const FlightSearch = lazy(() => import("./pages/FlightSearch"));
const Flights = lazy(() => import("./pages/Flights"));

export const App = () => {
  useEffect(() => {
    addFontawesomeIcons();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <FlightSearch />
            </Suspense>
          }
        />
        <Route
          path="/list"
          element={
            <Suspense>
              <Flights />
            </Suspense>
          }
        />
        <Route path="/complete" element={<FlightComplete />} />
        <Route path="/error" element={<FlightError />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
