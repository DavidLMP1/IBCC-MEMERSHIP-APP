import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import DirectoryScreen from "../screens/Directory/DirectoryScreen";
import CalendarScreen from "../screens/Calendar/CalendarScreen";
import PrayerRequestScreen from "../screens/Prayers/PrayerRequestScreen";
import AboutUsScreen from "../screens/About/AboutUsScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import UploadAudio from "../screens/Audio/UploadAudioScreen";
import AudioList from "../screens/AudioList/AudioListScreen";
import AudioPlayer from "../screens/AudioPlayer/AudioPlayerScreen";
import { COLORS } from "../constants/index";

const { DARK_BLUE_IBCC, GOLDEN_IBCC, BLUE_IBCC } = COLORS;

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: BLUE_IBCC, // Cambia el color de fondo de la barra superior
          },
          drawerStyle: {
            backgroundColor: BLUE_IBCC,
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Directory" component={DirectoryScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Prayer Requests" component={PrayerRequestScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        {/* <Drawer.Screen name="Register" component={RegisterScreen} /> */}
        <Drawer.Screen name="AudioPlayer" component={AudioPlayer} />
        {/* <Drawer.Screen name="Audio" component={UploadAudio} /> */}
        <Drawer.Screen name="AudioList" component={AudioList} />
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
