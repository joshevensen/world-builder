import { FC, useContext } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps as ScreenProps,
} from "@react-navigation/native-stack";

import { CategoriesContext } from "../store/categories.context";
import TemplateListScreen from "../features/templates/screens/TemplateListScreen";
import EntryListScreen from "../features/entries/screens/EntryListScreen";
import EntryViewScreen from "../features/entries/screens/EntryViewScreen";
import TemplateViewScreen from "../features/templates/screens/TemplateViewScreen";
import CONSTANTS from "../general/helpers/constants";
import WorldViewScreen from "../features/worlds/screens/WorldViewScreen";
import worldsData from "../data/dummy/worlds.data";
import WorldUpdateScreen from "../features/worlds/screens/WorldUpdateScreen";

type ParamList = {
  WorldView: { worldId: number };
  WorldUpdate: { worldId: number };
  EntryList: { categoryId: number };
  EntryView: { entryId: number };
  TemplateList: undefined;
  TemplateView: { templateId: number };
};

const Stack = createNativeStackNavigator<ParamList>();

export type WorldViewProp = ScreenProps<ParamList, "WorldView">;
export type WorldUpdateProp = ScreenProps<ParamList, "WorldUpdate">;
export type EntryListProp = ScreenProps<ParamList, "EntryList">;
export type EntryViewProp = ScreenProps<ParamList, "EntryView">;
export type TemplateListProp = ScreenProps<ParamList, "TemplateList">;
export type TemplateViewProp = ScreenProps<ParamList, "TemplateView">;

const MainNavigation: FC = () => {
  const categories = useContext(CategoriesContext);

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
        name="WorldView"
        component={WorldViewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorldUpdate"
        component={WorldUpdateScreen}
        options={({ route }) => {
          const world = worldsData.find(
            (world) => world.id === route.params?.worldId
          );

          return {
            headerTitle: world?.name,
          };
        }}
      />
      <Stack.Screen
        name="EntryList"
        component={EntryListScreen}
        options={({ route }) => {
          const category = categories.find(
            (category) => category.id === route.params?.categoryId
          );

          return {
            headerTitle: category?.name,
          };
        }}
      />
      <Stack.Screen name="EntryView" component={EntryViewScreen} />
      <Stack.Screen
        name="TemplateList"
        component={TemplateListScreen}
        options={{ headerTitle: "Templates" }}
      />
      <Stack.Screen name="TemplateView" component={TemplateViewScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
