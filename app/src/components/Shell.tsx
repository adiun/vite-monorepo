import { ReactNode } from "react";

import { useFlights } from "../context/AppServicesContext";

export interface Props {
  readonly children?: ReactNode;
}

export const Shell = ({ children }: Props): JSX.Element => {
  const flights = useFlights()();
  return (
    <main>
      <p>Disable Auth: {flights.disableAuth}</p>
      <p>Login URL: {flights.loginUrl}</p>
      <div>{children}</div>
    </main>
  );
};
