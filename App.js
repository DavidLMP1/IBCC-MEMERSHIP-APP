import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./navigation/MainStack";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { LoginScreen } from "./screens/Login/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Stack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
