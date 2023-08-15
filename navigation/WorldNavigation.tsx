import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps as ScreenProps,
} from "@react-navigation/native-stack";

import WorldListScreen from "../features/worlds/screens/WorldListScreen";
import WorldCreateScreen from "../features/worlds/screens/WorldCreateScreen";
import worldsData from "../data/dummy/worlds.data";
import CONSTANTS from "../general/helpers/constants";
import LibIconButton from "../general/library/IconButton";
import MainNavigation from "./MainNavigation";

type ParamList = {
  WorldList: undefined;
  WorldCreate: undefined;
  World: { worldId: number };
};

const Stack = createNativeStackNavigator<ParamList>();

export type WorldListProp = ScreenProps<ParamList, "WorldList">;
export type WorldCreateProp = ScreenProps<ParamList, "WorldCreate">;

const WorldNavigation: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: CONSTANTS.COLORS.headerBackground,
        },
        headerTintColor: CONSTANTS.PALETTE.white,
        contentStyle: {
          backgroundColor: CONSTANTS.COLORS.appBackground,
        },
      }}
    >
      <Stack.Screen
        name="WorldList"
        component={WorldListScreen}
        options={({ navigation }) => ({
          headerTitle: "Worlds",
          headerRight: ({ tintColor }) => (
            <LibIconButton
              onPress={() => {
                navigation.navigate("WorldCreate");
              }}
              icon={CONSTANTS.ICON.add}
              color={tintColor}
              size={CONSTANTS.ICON_SIZE.sm}
            />
          ),
        })}
      />
      <Stack.Screen
        name="WorldCreate"
        component={WorldCreateScreen}
        options={{ presentation: "modal", headerTitle: "Create World" }}
      />

      <Stack.Screen
        name="World"
        component={MainNavigation}
        options={({ route }) => {
          const world = worldsData.find(
            (world) => world.id === route.params?.worldId
          );

          return {
            headerTitle: world?.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default WorldNavigation;
