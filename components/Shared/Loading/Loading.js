import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./Loading.styles";

export function Loading(props) {

  return (
    <View style={styles.content}>
      <ActivityIndicator size="large" />
    <Text style={styles.text}>Cargando..</Text>
    </View>
  );
}
