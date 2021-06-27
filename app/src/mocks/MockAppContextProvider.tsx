import { ReactNode, useState } from "react";

import { AppContextProvider } from "../context/AppServicesContext";
import { createMockAppServices } from "./MockAppServices";

interface Props {
  readonly children: ReactNode;
}

export const MockAppContextProvider = ({ children }: Props): JSX.Element => {
  const [mockAppServices] = useState(createMockAppServices);

  return (
    <AppContextProvider value={mockAppServices}>{children}</AppContextProvider>
  );
};
