import { FC, useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { WorldViewProp } from "../../../navigation/MainNavigation";
import { CategoriesContext } from "../../../store/context/categories.context";
import CategoryItem from "../components/CategoryItem";
import LibCard from "../../../general/library/Card";
import { View } from "react-native";
import { selectActiveWorld } from "../../../store/redux/worlds.reducer";
import { useAppSelector } from "../../../general/helpers/hooks";
import LibText from "../../../general/library/Text";
import CONSTANTS from "../../../general/helpers/constants";
import LibIcon from "../../../general/library/Icon";

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
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          keyExtractor={(category: any) => category.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: CONSTANTS.SPACING[2] }} />
          )}
          renderItem={({ item }) => {
            return (
              <CategoryItem
                name={item.name}
                icon={item.icon}
                count={3}
                onPress={goToEntryList.bind("categoryId", item.id)}
              />
            );
          }}
          numColumns={2}
        />
      </View>

      <View style={styles.otherContainer}>
        <LibCard style={styles.otherCard} onPress={goToListlist}>
          <View style={styles.cardContainer}>
            <LibIcon
              name={CONSTANTS.ICON.lists}
              color={CONSTANTS.COLORS.color.text}
              size={CONSTANTS.SIZE.icon.sm}
            />
            <LibText style={styles.cardText}>Lists</LibText>
          </View>
        </LibCard>

        <LibCard style={styles.otherCard} onPress={goToTemplateList}>
          <View style={styles.cardContainer}>
            <LibIcon
              name={CONSTANTS.ICON.templates}
              color={CONSTANTS.COLORS.color.text}
              size={CONSTANTS.SIZE.icon.sm}
            />
            <LibText style={styles.cardText}>Templates</LibText>
          </View>
        </LibCard>

        <LibCard style={styles.otherCard} onPress={goToWorldUpdate}>
          <View style={styles.cardContainer}>
            <LibIcon
              name={CONSTANTS.ICON.settings}
              color={CONSTANTS.COLORS.color.text}
              size={CONSTANTS.SIZE.icon.sm}
            />
            <LibText style={styles.cardText}>Settings</LibText>
          </View>
        </LibCard>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginBottom: CONSTANTS.SPACING[8],
  },
  otherContainer: {
    paddingHorizontal: CONSTANTS.SPACING[2],
  },
  otherCard: {
    marginBottom: CONSTANTS.SPACING[4],
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: CONSTANTS.SPACING[4],
    fontSize: CONSTANTS.SIZE.font.lg,
  },
});

export default WorldViewScreen;
