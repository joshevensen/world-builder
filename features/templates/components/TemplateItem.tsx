import { Text, StyleSheet } from "react-native";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { Category } from "../../../data/models/category.model";
import { TemplateNavigationProp } from "../../../navigation/MainNavigation";
import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  name: string;
  description: string | null;
  category: Category;
  onPress?(): void;
};

const TemplateItem: FC<props> = ({ name, description, category, onPress }) => {
  const navigation = useNavigation<TemplateNavigationProp>();

  return (
    <LibCard style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: CONSTANTS.SPACING[5],
  },
});

export default TemplateItem;
