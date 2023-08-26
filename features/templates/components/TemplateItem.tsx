import { StyleSheet } from "react-native";
import { FC, useContext } from "react";
const _ = require("lodash");

import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";
import LibText from "../../../general/library/Text";
import { CategoriesContext } from "../../../store/context/categories.context";

type props = {
  name: string;
  description: string | null;
  categoryId: number;
  onPress?(): void;
};

const TemplateItem: FC<props> = ({
  name,
  description,
  categoryId,
  onPress,
}) => {
  const categories = useContext(CategoriesContext);
  const category = categories.find((category) => category.id === categoryId);

  return (
    <LibCard style={styles.container} onPress={onPress} includeArrow={true}>
      <LibText style={styles.category}>{category?.name}</LibText>
      <LibText style={styles.name}>{name}</LibText>
      {description && (
        <LibText style={styles.description}>
          {_.truncate(description, { length: 42 })}
        </LibText>
      )}
    </LibCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: CONSTANTS.SPACING[5],
  },
  category: {
    color: CONSTANTS.COLORS.color.muted,
  },
  name: {
    fontSize: CONSTANTS.SIZE.font.lg,
    fontWeight: "bold",
  },
  description: {
    marginTop: CONSTANTS.SPACING[2],
  },
});

export default TemplateItem;
