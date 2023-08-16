import { FC, useContext } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps as ScreenProps,
} from "@react-navigation/native-stack";

import CONSTANTS from "../general/helpers/constants";
import { ICategory } from "../data/interfaces/category.interface";
import { CategoriesContext } from "../store/context/categories.context";
import LibIconButton from "../general/library/IconButton";

import WorldViewScreen from "../features/worlds/screens/WorldViewScreen";
import WorldUpdateScreen from "../features/worlds/screens/WorldUpdateScreen";
import EntryListScreen from "../features/entries/screens/EntryListScreen";
import EntryViewScreen from "../features/entries/screens/EntryViewScreen";
import TemplateListScreen from "../features/templates/screens/TemplateListScreen";
import TemplateViewScreen from "../features/templates/screens/TemplateViewScreen";
import TemplateCreateScreen from "../features/templates/screens/TemplateCreateScreen";
import TemplateUpdateScreen from "../features/templates/screens/TemplateUpdateScreen";
import ListListScreen from "../features/lists/screens/ListListScreen";

type ParamList = {
  WorldView: { worldId: number };
  WorldUpdate: { worldId: number };
  EntryList: { categoryId: number };
  EntryView: { entryId: number };
  TemplateList: undefined;
  TemplateCreate: undefined;
  TemplateView: { templateId: number };
  TemplateUpdate: { templateId: number };
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
export type TemplateUpdateProp = ScreenProps<ParamList, "TemplateUpdate">;
export type ListListProp = ScreenProps<ParamList, "ListList">;

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
              <LibIconButton
                onPress={() => {
                  navigation.navigate("TemplateCreate");
                }}
                icon={CONSTANTS.ICON.add}
                color={tintColor}
                size={CONSTANTS.ICON_SIZE.sm}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TemplateCreate"
          component={TemplateCreateScreen}
          options={{ presentation: "modal", headerTitle: "Create Template" }}
        />
        <Stack.Screen name="TemplateView" component={TemplateViewScreen} />
        <Stack.Screen
          name="TemplateUpdate"
          component={TemplateUpdateScreen}
          options={{ headerTitle: "Update Template" }}
        />
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
