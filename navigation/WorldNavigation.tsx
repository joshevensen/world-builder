import { createDrawerNavigator } from "@react-navigation/drawer";
import { FC } from "react";

import EntryNavigation from "./EntryNavigation";
import TemplateNavigation from "./TemplateNavigation";

type ParamList = {
  Entries: undefined;
  Templates: undefined;
};

const Drawer = createDrawerNavigator<ParamList>();

const WorldNavigation: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Entries" component={EntryNavigation} />
      <Drawer.Screen name="Templates" component={TemplateNavigation} />
    </Drawer.Navigator>
  );
};

export default WorldNavigation;
