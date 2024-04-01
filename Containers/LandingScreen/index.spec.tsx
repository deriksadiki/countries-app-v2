import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from ".";

describe("LandingScreen", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <NavigationContainer>
        <LandingScreen />
      </NavigationContainer>
    );

    // Check if the "Our" and "World" texts are rendered
    expect(getByText("Our")).toBeTruthy();
    expect(getByText("World")).toBeTruthy();

    // Check if the "DISCOVER EARTH" button is rendered
    const discoverButton = getByText("DISCOVER EARTH");
    expect(discoverButton).toBeTruthy();
  });

  test("navigates to HomeScreen on button press", () => {
    // Mock the navigation function
    const mockNavigate = jest.fn();
    jest.mock("@react-navigation/native", () => ({
      ...jest.requireActual("@react-navigation/native"),
      useNavigation: () => ({ navigate: mockNavigate }),
    }));

    // Render the component
    const { getByText } = render(
      <NavigationContainer>
        <LandingScreen />
      </NavigationContainer>
    );

    // Simulate button press
    const discoverButton = getByText("DISCOVER EARTH");
    fireEvent.press(discoverButton);

    // Expect navigation to HomeScreen
    expect(mockNavigate).toHaveBeenCalledWith("HomeScreen");
  });
});
