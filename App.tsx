import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import store from "./store";
import WorldNavigation from "./navigation/WorldNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <WorldNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}
