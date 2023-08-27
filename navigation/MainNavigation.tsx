import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps as ScreenProps,
} from "@react-navigation/native-stack";

import CONSTANTS from "../general/helpers/constants";
import { ICategory } from "../data/interfaces/category.interface";

import WorldViewScreen from "../features/worlds/screens/WorldViewScreen";
import WorldUpdateScreen from "../features/worlds/screens/WorldUpdateScreen";
import EntryListScreen from "../features/entries/screens/EntryListScreen";
import EntryViewScreen from "../features/entries/screens/EntryViewScreen";
import TemplateListScreen from "../features/templates/screens/TemplateListScreen";
import TemplateViewScreen from "../features/templates/screens/TemplateViewScreen";
import TemplateCreateScreen from "../features/templates/screens/TemplateCreateScreen";
import ListListScreen from "../features/lists/screens/ListListScreen";
import categories from "../data/static/categories";
import LibButton from "../general/library/Button";

type ParamList = {
  World: undefined;
  WorldView: { worldId: number };
  WorldUpdate: { worldId: number };
  EntryList: { categoryId: string };
  EntryView: { entryId: number };
  TemplateList: undefined;
  TemplateCreate: undefined;
  TemplateView: { templateId: number };
  ListList: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

export type WorldViewProp = ScreenProps<ParamList, "WorldView">;
export type WorldUpdateProp = ScreenProps<ParamList, "WorldUpdate">;
export type EntryListProp = ScreenProps<ParamList, "EntryList">;
export type EntryViewProp = ScreenProps<ParamList, "EntryView">;
export type TemplateListProp = ScreenProps<ParamList, "TemplateList">;
export type TemplateCreateProp = ScreenProps<ParamList, "TemplateCreate">;
export type TemplateViewProp = ScreenProps<ParamList, "TemplateView">;
export type ListListProp = ScreenProps<ParamList, "ListList">;

const MainNavigation: FC = () => {
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
      {/**
       * Worlds
       */}
      <Stack.Group>
        <Stack.Screen
          name="WorldView"
          component={WorldViewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorldUpdate"
          component={WorldUpdateScreen}
          options={{ headerTitle: "Settings" }}
        />
      </Stack.Group>

      {/**
       * Entries
       */}
      <Stack.Group>
        <Stack.Screen
          name="EntryList"
          component={EntryListScreen}
          options={({ route }) => {
            const category = categories.find(
              (category: ICategory) => category.id === route.params?.categoryId
            );

            return {
              headerTitle: category?.name,
            };
          }}
        />
        <Stack.Screen name="EntryView" component={EntryViewScreen} />
      </Stack.Group>

      {/**
       * Templates
       */}
      <Stack.Group>
        <Stack.Screen
          name="TemplateList"
          component={TemplateListScreen}
          options={({ navigation }) => ({
            headerTitle: "Templates",
            headerRight: ({ tintColor }) => (
              <LibButton
                mode="icon"
                icon={CONSTANTS.ICON.add}
                iconSize={CONSTANTS.SIZE.icon.sm}
                color={tintColor}
                onPress={() => {
                  navigation.navigate("TemplateCreate");
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TemplateCreate"
          component={TemplateCreateScreen}
          options={({ navigation }) => ({
            presentation: "modal",
            headerTitle: "New Template",
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
        <Stack.Screen name="TemplateView" component={TemplateViewScreen} />
      </Stack.Group>

      {/**
       * Lists
       */}
      <Stack.Group>
        <Stack.Screen
          name="ListList"
          component={ListListScreen}
          options={{ headerTitle: "Lists" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
