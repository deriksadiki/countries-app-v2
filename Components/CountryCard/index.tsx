import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../Styles"; // Importing styles
import { useNavigation } from "@react-navigation/native";
import { CountryInfo } from "../../Constants"; // Importing types/constants
import AsyncStorage from "@react-native-async-storage/async-storage";

// Props interface for the CountryCard component
interface CountryCardProps {
  countryDetails: any; // Type of countryDetails prop
}

// CountryCard functional component
const CountryCard: React.FC<CountryCardProps> = ({ countryDetails }) => {
  const navigation = useNavigation(); // Navigation hook for navigating to other screens

  // Function to handle view more button press
  const handleViewMore = async () => {
    // Store selected country in AsyncStorage
    await AsyncStorage.setItem(
      "selectedCountry",
      JSON.stringify(countryDetails.name.common)
    );

    // Create country object with required information
    const country: CountryInfo = {
      countryName: countryDetails.name.official,
      summary: countryDetails.flags.alt,
      borders: countryDetails.borders,
      population: countryDetails.population,
      continent: countryDetails.region,
      timezones: countryDetails.timezones,
      flag: countryDetails.flags.png,
      startOfWeek: countryDetails.startOfWeek,
      alpha3Code: countryDetails.cioc,
    };

    // Navigate to ViewListScreen passing country object as parameter
    navigation.navigate("ViewListScreen", {
      country: country,
    });
  };

  return (
    // TouchableOpacity to make the component tappable
    <TouchableOpacity style={Styles.countryCard} onPress={handleViewMore}>
      <View style={{ flexDirection: "row" }}>
        {/* Display country name and alpha2 code */}
        <Text style={Styles.countryName}>{countryDetails.name.common}</Text>
        <Text style={Styles.alpha2Code}>{countryDetails.cca2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard; // Exporting the CountryCard component
