import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0000" style="light" />
       <AuthStack />
    </NavigationContainer>
  );
}
