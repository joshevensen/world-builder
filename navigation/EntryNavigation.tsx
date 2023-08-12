import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import EntryViewScreen from "../features/entries/screens/EntryViewScreen";
import EntryListScreen from "../features/entries/screens/EntryListScreen";

type ParamList = {
  EntryList: undefined;
  EntryView: { entryId: number };
};

export type EntryListScreenType = NativeStackScreenProps<
  ParamList,
  "EntryList"
>;
export type EntryViewScreenType = NativeStackScreenProps<
  ParamList,
  "EntryView"
>;
export type EntryViewNavigationType = NativeStackNavigationProp<
  ParamList,
  "EntryView"
>;

const Stack = createNativeStackNavigator<ParamList>();

const EntryNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EntryList"
        component={EntryListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EntryView" component={EntryViewScreen} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;
