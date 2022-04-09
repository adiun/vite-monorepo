import { Flights } from "./Flights";

export interface AppServices {
  readonly setFlights: (flights: Flights) => void;
}
