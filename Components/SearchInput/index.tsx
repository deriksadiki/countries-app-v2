import React from "react"; // Importing React
import { TextInput } from "react-native"; // Importing TextInput component from React Native
import { Styles } from "../../Styles"; // Importing styles

// SearchInput functional component
interface SearchInputProps {
  value: string; // Value of the input field
  onChangeText: (text: string) => void; // Function to handle text input change
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={Styles.searchInput} // Applying styles to the input field
      placeholder="Search to filter list" // Placeholder text
      placeholderTextColor="white" // Placeholder text color
      value={value} // Value of the input field
      onChangeText={onChangeText} // Function to handle text input change
    />
  );
};

export default SearchInput; // Exporting SearchInput component
