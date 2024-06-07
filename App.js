const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import CalendarPage from "./screens/CalendarPage";
import Notification1 from "./screens/Notification1";
import KPICompletionProgress from "./screens/KPICompletionProgress";
import ToDoList from "./screens/ToDoList";
import Notification2 from "./screens/Notification2";
import NotificationMaskRead from "./screens/NotificationMaskRead";
import KPICompletionProgressDetail from "./screens/KPICompletionProgressDetail";
import ToDoListClick from "./screens/ToDoListClick";
import ToDoListClick1 from "./screens/ToDoListClick1";
import ProfilePhotos from "./screens/ProfilePhotos";
import CalendarPage1 from "./screens/CalendarPage1";
import Frame1 from "./components/Frame1";
import KPICompletionProgressDetail1 from "./screens/KPICompletionProgressDetail1";
import KPICompletionProgressDetail2 from "./screens/KPICompletionProgressDetail2";
import Frame from "./components/Frame";
import LogIn from "./screens/LogIn";
import ResetPassword from "./screens/ResetPassword";
import ResetPasswordStep from "./screens/ResetPasswordStep";
import ResetPasswordStep1 from "./screens/ResetPasswordStep1";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBoldItalic": require("./assets/fonts/OpenSans-SemiBoldItalic.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "NotoSans-LightItalic": require("./assets/fonts/NotoSans-LightItalic.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalendarPage"
              component={CalendarPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KPICompletionProgress"
              component={KPICompletionProgress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToDoList"
              component={ToDoList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification2"
              component={Notification2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationMaskRead"
              component={NotificationMaskRead}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KPICompletionProgressDetail"
              component={KPICompletionProgressDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToDoListClick"
              component={ToDoListClick}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToDoListClick1"
              component={ToDoListClick1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePhotos"
              component={ProfilePhotos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalendarPage1"
              component={CalendarPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KPICompletionProgressDetail1"
              component={KPICompletionProgressDetail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KPICompletionProgressDetail2"
              component={KPICompletionProgressDetail2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordStep"
              component={ResetPasswordStep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordStep1"
              component={ResetPasswordStep1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
