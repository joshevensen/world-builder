import { FC, useContext } from "react";
import { FlatList, Text } from "react-native";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { WorldViewProp } from "../../../navigation/MainNavigation";
import { CategoriesContext } from "../../../store/context/categories.context";
import CategoryItem from "../components/CategoryItem";
import LibCard from "../../../general/library/Card";
import { View } from "react-native";
import { selectActiveWorld } from "../../../store/redux/worlds.reducer";
import { useAppSelector } from "../../../general/helpers/hooks";

const WorldViewScreen: FC<WorldViewProp> = ({ navigation }) => {
  const categories = useContext(CategoriesContext);
  const world = useAppSelector(selectActiveWorld);

  function goToEntryList(categoryId: number) {
    navigation.navigate("EntryList", { categoryId: categoryId });
  }

  function goToTemplateList() {
    navigation.navigate("TemplateList");
  }

  function goToListlist() {
    navigation.navigate("ListList");
  }

  function goToWorldUpdate() {
    if (world) {
      navigation.navigate("WorldUpdate", { worldId: world.id });
    }
  }

  return (
    <ScreenWrapper>
      <View>
        <FlatList
          data={categories}
          keyExtractor={(category: any) => category.id}
          renderItem={({ item }) => {
            const itemProps = {
              name: item.name,
              icon: item.icon,
            };

            return (
              <CategoryItem
                {...itemProps}
                onPress={goToEntryList.bind("categoryId", item.id)}
              />
            );
          }}
          numColumns={2}
        />

        <LibCard onPress={goToListlist}>
          <Text>Lists</Text>
        </LibCard>

        <LibCard onPress={goToTemplateList}>
          <Text>Templates</Text>
        </LibCard>

        <LibCard onPress={goToWorldUpdate}>
          <Text>Settings</Text>
        </LibCard>
      </View>
    </ScreenWrapper>
  );
};

export default WorldViewScreen;
