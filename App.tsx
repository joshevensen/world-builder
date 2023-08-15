import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesProvider from "./store/categories.context";
import WorldNavigation from "./navigation/WorldNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesProvider>
        <NavigationContainer>
          <WorldNavigation />
        </NavigationContainer>
      </CategoriesProvider>
    </>
  );
}
