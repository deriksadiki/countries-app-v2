import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("window").height;

export const Styles = StyleSheet.create({
  LandingScreenText: {
    marginTop: height * 0.62,
    color: "#ffff",
    fontSize: 80,
    fontWeight: "bold",
  },

  worldText: {
    marginTop: -30,
    color: "#ffff",
    fontSize: 80,
    fontWeight: "bold",
  },

  button: {
    width: width * 0.6,
    height: height * 0.06,
    backgroundColor: "#0000",
    borderWidth: 1,
    borderColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
    marginRight: 12,
  },

  backgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  heading: {
    marginTop: height * 0.05,
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },
  subHeading: {
    color: "white",
    marginBottom: 20,
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "darkgrey",
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  listView: {
    flex: 1,
  },
  countryCard: {
    backgroundColor: "darkgrey",
    borderRadius: 5,
    padding: 17,
    marginBottom: 10,
  },
  countryName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  alpha2Code: {
    color: "white",
    marginLeft: "auto",
    fontWeight: "700",
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 9,
  },

  ListContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  header: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },
  flagImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  ListHeading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summary: {
    color: "white",
    marginBottom: 20,
  },

  factItem: {
    color: "white",
    marginBottom: 5,
    marginTop: 3,
    fontSize: 15,
  },
});
