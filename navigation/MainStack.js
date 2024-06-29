import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import DirectoryScreen from "../screens/Directory/DirectoryScreen";

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#173B46",
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Directory" component={DirectoryScreen} />
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
