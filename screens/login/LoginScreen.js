import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LoginForm } from "../../components/Auth";
import { Image, Button } from "react-native-elements";
import { styles } from "./LoginScreen.styles";

export function LoginScreen({navigation}) {
  return (
    <ScrollView style={styles.content}>
      <Image
        source={require("../../assets/img/logoIbcc.png")}
        style={styles.image}
      />
      {/* <View style={styles.subtitle}>
        <Text style={styles.tittle}>Members Directory 2024</Text>
      </View> */}
      <LoginForm />
    </ScrollView>
  );
}
