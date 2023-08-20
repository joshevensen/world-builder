import { FC } from "react";
import LibCard from "../../../general/library/Card";
import { StyleSheet } from "react-native";
import CONSTANTS from "../../../general/helpers/constants";
import LibText from "../../../general/library/Text";
import LibIcon from "../../../general/library/Icon";
import { View } from "react-native";

type props = {
  name: string;
  icon: string;
  count: number;
  onPress?(): void;
};

const CategoryItem: FC<props> = ({ name, icon, count, onPress }) => {
  return (
    <LibCard style={styles.categoryItem} onPress={onPress}>
      <View style={styles.container}>
        <LibIcon
          name={icon}
          color={CONSTANTS.COLORS.color.text}
          size={CONSTANTS.SIZE.icon.sm}
        />
        <LibText style={styles.count}>{count}</LibText>
      </View>

      <LibText style={styles.text}>{name}</LibText>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    paddingBottom: CONSTANTS.SPACING[2],
    marginHorizontal: CONSTANTS.SPACING[2],
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  count: {
    fontSize: CONSTANTS.SPACING[6],
    fontWeight: "bold",
  },
  text: {
    marginTop: 4,
  },
});

export default CategoryItem;
