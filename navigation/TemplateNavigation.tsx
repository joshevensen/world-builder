import { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import TemplateViewScreen from "../features/templates/screens/TemplateViewScreen";
import TemplateListScreen from "../features/templates/screens/TemplateListScreen";

type ParamList = {
  TemplateList: undefined;
  TemplateView: { templateId: number };
};

export type TemplateListScreenType = NativeStackScreenProps<
  ParamList,
  "TemplateList"
>;
export type TemplateViewScreenType = NativeStackScreenProps<
  ParamList,
  "TemplateView"
>;
export type TemplateViewNavigationType = NativeStackNavigationProp<
  ParamList,
  "TemplateView"
>;

const Stack = createNativeStackNavigator<ParamList>();

const TemplateNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TemplateList"
        component={TemplateListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TemplateView" component={TemplateViewScreen} />
    </Stack.Navigator>
  );
};

export default TemplateNavigation;
