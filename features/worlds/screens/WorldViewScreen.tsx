import { FC, useContext } from "react";
import { FlatList, Text } from "react-native";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { WorldViewProp } from "../../../navigation/MainNavigation";
import { CategoriesContext } from "../../../store/categories.context";
import CategoryItem from "../components/CategoryItem";
import LibCard from "../../../general/library/Card";
import { View } from "react-native";

const WorldViewScreen: FC<WorldViewProp> = ({ navigation }) => {
  const categories = useContext(CategoriesContext);

  function goToEntryList(categoryId: number) {
    navigation.navigate("EntryList", { categoryId: categoryId });
  }

  function goToTemplates() {
    navigation.navigate("TemplateList");
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

        <LibCard>
          <Text>Lists</Text>
        </LibCard>

        <LibCard onPress={goToTemplates}>
          <Text>Templates</Text>
        </LibCard>

        <LibCard>
          <Text>Settings</Text>
        </LibCard>
      </View>
    </ScreenWrapper>
  );
};

export default WorldViewScreen;
