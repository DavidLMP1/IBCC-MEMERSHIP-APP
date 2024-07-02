import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 30,
    paddingHorizontal: 40,
  },

  subContent: {
    marginBottom: 15,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtittle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {},
});
