import { AppServices } from "../contracts/AppServices";

export const createMockAppServices = (): AppServices => ({
  getFlights: jest.fn(),
});
