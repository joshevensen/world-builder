import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps as ScreenProps,
} from "@react-navigation/native-stack";

import CONSTANTS from "../general/helpers/constants";
import WorldListScreen from "../features/worlds/screens/WorldListScreen";
import WorldCreateScreen from "../features/worlds/screens/WorldCreateScreen";
import MainNavigation from "./MainNavigation";
import { useAppSelector } from "../general/helpers/hooks";
import { IWorld } from "../data/interfaces/world.interface";
import LibButton from "../general/library/Button";

type ParamList = {
  WorldList: undefined;
  WorldCreate: undefined;
  World: { worldId: number };
};

const Stack = createNativeStackNavigator<ParamList>();

export type WorldListProp = ScreenProps<ParamList, "WorldList">;
export type WorldCreateProp = ScreenProps<ParamList, "WorldCreate">;

const WorldNavigation: FC = () => {
  const worlds = useAppSelector((state) => state.worlds.all);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: CONSTANTS.COLORS.backgroundColor.header,
        },
        headerTintColor: CONSTANTS.PALETTE.white,
        contentStyle: {
          backgroundColor: CONSTANTS.COLORS.backgroundColor.app,
        },
      }}
    >
      <Stack.Screen
        name="WorldList"
        component={WorldListScreen}
        options={({ navigation }) => ({
          headerTitle: "Worlds",
          headerRight: ({ tintColor }) => (
            <LibButton
              mode="icon"
              icon={CONSTANTS.ICON.add}
              iconSize={CONSTANTS.SIZE.icon.sm}
              color={tintColor}
              onPress={() => {
                navigation.navigate("WorldCreate");
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="WorldCreate"
        component={WorldCreateScreen}
        options={({ navigation }) => ({
          presentation: "modal",
          headerTitle: "New World",
          headerLeft: () => (
            <LibButton
              mode="flat"
              onPress={() => {
                navigation.goBack();
              }}
            >
              Cancel
            </LibButton>
          ),
          headerRight: () => <LibButton mode="flat">Done</LibButton>,
        })}
      />

      <Stack.Screen
        name="World"
        component={MainNavigation}
        options={({ route }) => {
          const world = worlds.find(
            (world: IWorld) => world.id === route.params?.worldId
          );

          return {
            headerTitle: world!.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default WorldNavigation;
