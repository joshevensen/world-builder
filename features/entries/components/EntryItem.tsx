import { Text, View, StyleSheet, Pressable } from "react-native";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { Category } from "../../../data/models/category.model";
import { EntryViewNavigationType } from "../../../navigation/EntryNavigation";

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
    <View style={styles.container}>
      <Pressable onPress={goToEntryView}>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default EntryItem;
