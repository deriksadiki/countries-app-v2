import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import HomeScreen from ".";

describe("HomeScreen", () => {
  test("renders loading indicator", () => {
    const { getByTestId } = render(<HomeScreen />);
    const loadingIndicator = getByTestId("loading-indicator");
    expect(loadingIndicator).toBeTruthy();
  });

  test("renders error message", async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error("Failed to fetch"));
    const { getByText } = render(<HomeScreen />);
    await waitFor(() => expect(getByText("Error fetching data")).toBeTruthy());
  });

  test("renders countries list", async () => {
    // Mock fetch function
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          { name: { common: "Country 1" }, flag: "url1" },
          { name: { common: "Country 2" }, flag: "url2" },
        ]),
    });

    const { getByText } = render(<HomeScreen />);
    await waitFor(() => expect(getByText("Country 1")).toBeTruthy());
    expect(getByText("Country 2")).toBeTruthy();
  });

  test("filters countries based on search query", async () => {
    // Mock fetch function
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          { name: { common: "Country 1" }, flag: "url1" },
          { name: { common: "Country 2" }, flag: "url2" },
        ]),
    });

    const { getByTestId, getByText } = render(<HomeScreen />);
    await waitFor(() => expect(getByText("Country 1")).toBeTruthy());

    const searchInput = getByTestId("search-input");
    fireEvent.changeText(searchInput, "Country 2");
    expect(getByText("Country 1")).toBeFalsy();
    expect(getByText("Country 2")).toBeTruthy();
  });
});
