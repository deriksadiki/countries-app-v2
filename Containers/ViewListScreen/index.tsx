import { useRoute } from "@react-navigation/native"; // Importing useRoute hook from react-navigation
import React from "react"; // Importing React
import { View, Text, Image } from "react-native"; // Importing components from React Native
import get from "lodash/get"; // Importing get function from lodash
import { CountryInfo } from "../../Constants"; // Importing CountryInfo type from Constants
import { Styles } from "../../Styles"; // Importing styles

// ViewListScreen functional component
const ViewListScreen = () => {
  const { params } = useRoute(); // Using useRoute hook to get route parameters
  const country: CountryInfo = get(
    params as Record<string, CountryInfo>,
    "country"
  ); // Getting country information from route parameters

  return (
    <View style={Styles.ListContainer}>
      {country && (
        // Rendering country details if country exists
        <View>
          <Text style={Styles.ListHeading}>{country.countryName}</Text>
          <Image source={{ uri: country.flag }} style={Styles.flagImage} />
          {/* Displaying country flag */}
          {country.summary && (
            // Rendering summary if available
            <View>
              <Text style={Styles.ListHeading}>Summary</Text>
              <Text style={Styles.summary}>{country.summary}</Text>
            </View>
          )}
          {/* Displaying quick facts */}
          <Text style={Styles.ListHeading}>Quick Facts</Text>

          <View>
            {/* Displaying alpha 3 code */}
            <Text style={Styles.factItem}>
              Alpha 3 Code: {country.alpha3Code}
            </Text>
            {/* Displaying borders */}
            <Text style={Styles.factItem}>
              Borders:
              {country.borders ? country.borders.join(", ") : "Not Available"}
            </Text>
            {/* Displaying population */}
            <Text style={Styles.factItem}>
              Population: {country.population}
            </Text>
            {/* Displaying continent */}
            <Text style={Styles.factItem}>Continent: {country.continent}</Text>
            {/* Displaying timezones */}
            <Text style={Styles.factItem}>Timezones: {country.timezones}</Text>
            {/* Displaying start of week */}
            <Text style={[Styles.factItem, {textTransform: "capitalize"}]}>
              Start of week: {country.startOfWeek}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ViewListScreen; // Exporting ViewListScreen component
