import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Image, Button } from "react-native-elements";
import { styles } from "./HomeScreen.styles";
// import { getUsuario } from "../../storage/UserAsyncStorage";

export function HomeScreen({ navigation }) {
  // useEffect(() => {
  //   const newFunc = async () => {
  //     const newAdmin = await getUsuario();
  //     if (newAdmin) {
  //       navigation.navigate("LocationSelect");
  //     }
  //   };
  //   newFunc();
  // }, []);

  return (
    <View style={styles.content}>
      <Image
        source={require("../../assets/img/logoIbcc.png")}
        style={styles.image}
      />
      {/* <Text style={styles.tittle}>Members Directory</Text>
      <Text style={styles.tittle2}>2024</Text> */}
      <Button
        title="Go to Login"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={styles.titleBtn}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}
