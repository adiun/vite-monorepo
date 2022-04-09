import { ReactNode } from "react";

import { useSetFlights } from "../context/AppServicesContext";

export interface Props {
  readonly children?: ReactNode;
}

export const Shell = ({ children }: Props): JSX.Element => {
  const setFlights = useSetFlights();
  setFlights({ disableAuth: false });
  return (
    <main>
      <p>Shell</p>
      <div>{children}</div>
    </main>
  );
};
