import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EntryListScreen from "./screens/EntryListScreen";
import EntryViewScreen from "./screens/EntryViewScreen";

const Stack = createNativeStackNavigator();

const EntryNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewEntries"
        component={EntryListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ViewEntry" component={EntryViewScreen} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;
