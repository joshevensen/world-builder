import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}
