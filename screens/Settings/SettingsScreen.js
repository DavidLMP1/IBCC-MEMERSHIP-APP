import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import { styles } from "./SettingsScreen.styles";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.content}>
      <SettingsForm />
    </ScrollView>
  );
};

export default SettingsScreen;
