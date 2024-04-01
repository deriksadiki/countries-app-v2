import React from "react"; // Importing React
import { ImageBackground, Text, TouchableOpacity } from "react-native"; // Importing necessary components from React Native
import { Ionicons } from "@expo/vector-icons"; // Importing Ionicons from Expo vector icons library
import { Styles } from "../../Styles"; // Importing styles
import { useNavigation } from "@react-navigation/native"; // Importing useNavigation hook from React Navigation

// LandingScreen functional component
const LandingScreen: React.FC = () => {
  const navigation = useNavigation(); // Initializing navigation object using useNavigation hook

  // Function to navigate to HomeScreen
  const handleDisover = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ImageBackground
      source={require("../../assets/Urban.jpeg")} // Background image source
      style={Styles.backgroundImage} // Background image style
    >
      <Text style={Styles.LandingScreenText}>Our</Text>
      {/* Heading text */}
      <Text style={Styles.worldText}>World</Text>
      {/* Subheading text */}
      <TouchableOpacity style={Styles.button} onPress={handleDisover}>
        {/* Button to navigate to HomeScreen */}
        <Text style={Styles.buttonText}>DISCOVER EARTH</Text>
        {/* Button text */}
        <Ionicons name="arrow-forward" size={24} color="white" />
        {/* Arrow icon */}
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LandingScreen; // Exporting LandingScreen component
