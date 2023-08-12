import { Text, StyleSheet, Pressable } from "react-native";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { Category } from "../../../data/models/category.model";
import { EntryViewNavigationType } from "../../../navigation/EntryNavigation";
import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  id: number;
  name: string;
  description: string | null;
  category: Category;
};

const EntryItem: FC<props> = ({ id, name, description, category }) => {
  const navigation = useNavigation<EntryViewNavigationType>();

  function goToEntryView() {
    return navigation.navigate("EntryView", { entryId: id });
  }

  return (
    <LibCard style={styles.container}>
      <Pressable onPress={goToEntryView}>
        <Text>{name}</Text>
      </Pressable>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: CONSTANTS.SPACING[5],
  },
});

export default EntryItem;
