import { FC } from "react";
import LibCard from "../../../general/library/Card";
import { StyleSheet, Text } from "react-native";
import CONSTANTS from "../../../general/helpers/constants";

type props = {
  name: string;
  icon: string;
  onPress?(): void;
};

const CategoryItem: FC<props> = ({ name, icon, onPress }) => {
  return (
    <LibCard style={styles.categoryItem} onPress={onPress}>
      <Text>{name}</Text>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: CONSTANTS.SPACING[4],
  },
});

export default CategoryItem;
