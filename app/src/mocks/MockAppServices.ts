import { AppServices } from "../contracts/AppServices";

export const createMockAppServices = (): AppServices => ({
  getFlights: () => {
    console.log(jest);
    return {
      disableAuth: false,
    };
  },
});
