import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
//containers
import LandingScreen from "../Containers/LandingScreen";
import HomeScreen from "../Containers/HomeScreen";
import ViewListScreen from "../Containers/ViewListScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationTypeForReplace: "push",
      }}
      initialRouteName="LandingScreen"
    >
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      <Stack.Screen
        name="ViewListScreen"
        component={ViewListScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black", // Set header background color
          },
          headerTintColor: "white", // Set header text color and back button color
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
