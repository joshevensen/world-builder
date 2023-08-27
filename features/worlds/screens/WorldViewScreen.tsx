import { FC } from "react";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { WorldViewProp } from "../../../navigation/MainNavigation";
import { selectActiveWorld } from "../../../store/worlds.reducer";
import { useAppSelector } from "../../../general/helpers/hooks";
import CONSTANTS from "../../../general/helpers/constants";
import LibList, { ListItem } from "../../../general/library/List";
import categories from "../../../data/static/categories";

const WorldViewScreen: FC<WorldViewProp> = ({ navigation }) => {
  const world = useAppSelector(selectActiveWorld);

  if (!world) {
    navigation.goBack();
    return <></>;
  }

  function goToEntryList(categoryId: string) {
    navigation.navigate("EntryList", { categoryId: categoryId });
  }

  function goToTemplateList() {
    navigation.navigate("TemplateList");
  }

  function goToListlist() {
    navigation.navigate("ListList");
  }

  function goToWorldUpdate() {
    if (world?.id) {
      navigation.navigate("WorldUpdate", { worldId: world.id });
    }
  }

  const categoriesSection: ListItem[] = categories.map((category) => {
    return {
      id: category.id,
      label: category.name,
      subText: "0",
      icon: category.icon,
      includeArrow: true,
      onPress: goToEntryList.bind("categoryId", category.id),
    };
  });

  const otherSection: ListItem[] = [
    {
      id: "listsPage",
      label: "Lists",
      subText: world?.counts.lists.toString(),
      icon: CONSTANTS.ICON.lists,
      includeArrow: true,
      onPress: goToListlist,
    },
    {
      id: "templatesPage",
      label: "Templates",
      subText: world?.counts.templates.toString(),
      icon: CONSTANTS.ICON.templates,
      includeArrow: true,
      onPress: goToTemplateList,
    },
    {
      id: "settingsPage",
      label: "Settings",
      icon: CONSTANTS.ICON.settings,
      includeArrow: true,
      onPress: goToWorldUpdate,
    },
  ];

  return (
    <ScreenWrapper>
      <LibList
        sections={[
          { title: "Entries", data: categoriesSection },
          { title: "", data: otherSection },
        ]}
      />
    </ScreenWrapper>
  );
};

export default WorldViewScreen;
