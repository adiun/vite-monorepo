import { AppServices } from "../contracts/AppServices";

export const createMockAppServices = (): AppServices => ({
  setFlights: jest.fn(),
});
