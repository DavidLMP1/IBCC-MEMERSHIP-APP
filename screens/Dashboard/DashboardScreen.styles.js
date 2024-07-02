import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  content: {
    paddingTop: windowHeight * 0.22,
    flex: 1,    
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    // marginTop: 20,
  },
});
