import { createDrawerNavigator } from "@react-navigation/drawer";
import { FC } from "react";

import EntryNavigation from "../features/entries/EntryNavigation";
import TemplateNavigation from "../features/templates/TemplateNavigation";

const Drawer = createDrawerNavigator();

const MainNavigation: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Entries" component={EntryNavigation} />
      <Drawer.Screen name="Templates" component={TemplateNavigation} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
