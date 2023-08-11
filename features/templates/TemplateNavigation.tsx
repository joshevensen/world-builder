import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TemplateListScreen from "./screens/TemplateListScreen";
import TemplateViewScreen from "./screens/TemplateViewScreen";

const Stack = createNativeStackNavigator();

const TemplateNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewTemplates"
        component={TemplateListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ViewTemplate" component={TemplateViewScreen} />
    </Stack.Navigator>
  );
};

export default TemplateNavigation;
