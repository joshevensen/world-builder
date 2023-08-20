import { StyleSheet } from "react-native";
import { FC } from "react";

import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";
import LibText from "../../../general/library/Text";

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
  return (
    <LibCard style={styles.container} onPress={onPress}>
      <LibText>{name}</LibText>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: CONSTANTS.SPACING[5],
  },
});

export default TemplateItem;
