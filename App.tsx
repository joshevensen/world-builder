import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import store from "./store/redux";
import CategoriesProvider from "./store/context/categories.context";
import WorldNavigation from "./navigation/WorldNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <CategoriesProvider>
          <NavigationContainer>
            <WorldNavigation />
          </NavigationContainer>
        </CategoriesProvider>
      </Provider>
    </>
  );
}
