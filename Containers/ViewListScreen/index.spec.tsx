import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import ViewListScreen from ".";

// Mock the useRoute hook
jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: {
      country: {
        countryName: "Test Country",
        flag: "test-flag-url",
        summary: "Test summary",
        alpha3Code: "TST",
        borders: ["Border1", "Border2"],
        population: 1000000,
        continent: "Test Continent",
        timezones: "Timezone1",
        startOfWeek: "Monday",
      },
    },
  }),
}));

describe("ViewListScreen", () => {
  test("renders country details", async () => {
    const { getByText } = render(<ViewListScreen />);

    await waitFor(() => {
      expect(getByText("Test Country")).toBeTruthy();
      expect(getByText("Test summary")).toBeTruthy();
      expect(getByText("Alpha 3 Code: TST")).toBeTruthy();
      expect(getByText("Borders:Border1, Border2")).toBeTruthy();
      expect(getByText("Population: 1000000")).toBeTruthy();
      expect(getByText("Continent: Test Continent")).toBeTruthy();
      expect(getByText("Timezones: Timezone1")).toBeTruthy();
      expect(getByText("Start of week: Monday")).toBeTruthy();
    });
  });
});
