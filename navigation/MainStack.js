import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import DirectoryScreen from "../screens/Directory/DirectoryScreen";
import CalendarScreen from "../screens/Calendar/CalendarScreen";
import PrayerRequest from "../screens/Prayers/PrayerRequest";
import AboutUs from "../screens/About/AboutUs";

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Directory" component={DirectoryScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Prayer Requests" component={PrayerRequest} />
        <Drawer.Screen name="About Us" component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
