import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  content: {
    backgroundColor: "#fff",
    paddingTop: windowHeight * 0.15,
  },
  textRegister: {
    marginTop: 15,
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
    marginTop: 20,
    fontSize: 24,
    color: "#173B46",
    fontWeight: "bold",
  }
});
