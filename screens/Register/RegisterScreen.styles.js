import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
  },
  content: {
    backgroundColor: "#fff",
    // paddingTop: windowHeight * 0.05,
  },
  textRegister: {
    marginHorizontal: 10,
  },
  btnRegister: {
    color: "#173B46",
    fontWeight: "bold",
  },
  subtitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    fontSize: 24,
    color: "#173B46",
    fontWeight: "bold",
  }
});
