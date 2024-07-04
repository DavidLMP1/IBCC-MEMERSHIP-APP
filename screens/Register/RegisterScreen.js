import React from "react";
import { View, Text, ScrollView } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { styles } from "./RegisterScreen.styles";

export default function RegisterScreen() {
  return (
    <View style={styles.content}>
      <RegisterForm />
    </View>
  );
}
