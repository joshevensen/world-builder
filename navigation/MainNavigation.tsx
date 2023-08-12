import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import WorldListScreen from "../features/worlds/screens/WorldListScreen";
import WorldCreateScreen from "../features/worlds/screens/WorldCreateScreen";
import WorldNavigation from "./WorldNavigation";
import worldsData from "../data/dummy/worlds.data";

type ParamList = {
  WorldList: undefined;
  WorldView: { worldId: number };
  WorldCreate: undefined;
};

export type WorldListScreenType = NativeStackScreenProps<
  ParamList,
  "WorldList"
>;
export type WorldCreateScreenType = NativeStackScreenProps<
  ParamList,
  "WorldCreate"
>;
export type WorldViewNavigationType = NativeStackNavigationProp<
  ParamList,
  "WorldView"
>;

const Stack = createNativeStackNavigator<ParamList>();

const MainNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="WorldList"
        component={WorldListScreen}
        options={{
          headerTitle: "Worlds",
        }}
      />
      <Stack.Screen
        name="WorldView"
        component={WorldNavigation}
        options={({ route }) => {
          const world = worldsData.find(
            (world) => world.id === route.params.worldId
          );

          return {
            headerTitle: world?.name,
          };
        }}
      />
      <Stack.Screen name="WorldCreate" component={WorldCreateScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
