import { Flights } from "./Flights";

export interface AppServices {
  readonly getFlights: () => Flights;
}
