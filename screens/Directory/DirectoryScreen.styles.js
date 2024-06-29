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
});
