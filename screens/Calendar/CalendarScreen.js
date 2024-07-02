import React from "react";
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function CalendarScreen() {
  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markedDates={{
          "2024-07-13": { selected: true, marked: true, selectedColor: "blue" },
          "2024-07-11": { marked: true },
          "2024-07-12": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2024-07-15": { disabled: true, disableTouchEvent: true },
        }}
        style={{
          // borderWidth: 1,
          // borderColor: "gray",
          height: "95%",
        }}
        theme={{
          // arrowColor: "black",
          "stylesheet.day.basic": {
            base: {
              height: 100,
              width: 45,
              alignItems: 'center'
            },
          },
        }}
      />
    </View>
  );
  z;
}
