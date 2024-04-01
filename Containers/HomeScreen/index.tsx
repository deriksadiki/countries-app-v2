import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Styles } from "../../Styles"; // Importing styles
import { Ionicons } from "@expo/vector-icons"; // Importing icon component
import CountryCard from "../../Components/CountryCard"; // Importing CountryCard component
import SearchInput from "../../Components/SearchInput"; // Importing SearchInput component

// HomeScreen functional component
const HomeScreen = () => {
  // State variables
  const [countries, setCountries] = useState<any[]>([]); // Array of countries
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]); // Array of filtered countries
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state

  // Fetch countries data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch countries data from API
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        // Sort the data alphabetically by country name
        const sortedData = data.sort((a: any, b: any) => {
          const nameA = a.name.common.toLowerCase();
          const nameB = b.name.common.toLowerCase();
          return nameA.localeCompare(nameB);
        });

        // Set countries and filtered countries states
        setCountries(sortedData);
        setFilteredCountries(sortedData); // Initially set filtered countries to all countries
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData function
  }, []);

  // Function to filter countries based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update search query state
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered); // Set filtered countries
  };

  // Render loading indicator while data is being fetched
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  // Render error message if there's an error fetching data
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Render HomeScreen
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Countries</Text>
      <Text style={Styles.subHeading}>
        Discover fascinating nations along with their culture, people, and
        landscapes.
      </Text>
      <View style={Styles.searchContainer}>
        {/* Render search input */}
        <SearchInput onChangeText={handleSearch} value={searchQuery} />
        <Ionicons
          name="search"
          size={20}
          color="white"
          style={Styles.searchIcon}
        />
      </View>
      {/* Render list of countries */}
      <FlatList
        data={filteredCountries} // Render filtered countries instead of all countries
        renderItem={({ item, index }) => <CountryCard countryDetails={item} />} // Render each country card
        keyExtractor={(item, index) => index.toString()}
        style={Styles.listView}
      />
    </View>
  );
};

export default HomeScreen; // Export HomeScreen component
