import { AppServices } from "../contracts/AppServices";
import { Flights } from "../contracts/Flights";
import { createStrictContext } from "../services/UseStrictContext";

const [AppContextProvider, useApiServices] =
  createStrictContext<AppServices>("AppServices");

export { AppContextProvider };

export const useFlights = (): (() => Flights) => useApiServices().getFlights;
