import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "95%",
  },
  btn: {
    marginTop: 100,
    backgroundColor: "transparent",
    width: 220,
    height: 50,
    borderRadius: 50,
    borderColor: "#173B46",
    borderWidth: 1.5,
  },
  titleBtn: {
    color: "#173B46"
  },
  tittle: {
    marginTop: 30,
    fontSize: 20,
    color: "#173B46",
    fontWeight: "500",
  },
  tittle2: {
    fontSize: 20,
    color: "#173B46",
    fontWeight: "500",
  },
});
