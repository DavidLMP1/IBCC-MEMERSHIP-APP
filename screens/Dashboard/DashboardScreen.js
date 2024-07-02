import React from "react";
import { View, Text, Button } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "./DashboardScreen.styles";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <Image
        source={require("../../assets/img/logoIbcc.png")}
        style={styles.image}
      />
    </View>
  );
};

export default DashboardScreen;
