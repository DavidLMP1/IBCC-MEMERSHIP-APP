import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./PrayerRequestScreen.styles";
import PrayerRequestForm from "../../components/PrayerRequestForm/PrayerRequestForm";

export default function PrayerRequest() {
  return (
    <ScrollView style={styles.content}>
      <PrayerRequestForm />
    </ScrollView>
  );
}
