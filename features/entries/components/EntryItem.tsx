import { Text, StyleSheet } from "react-native";
import { FC } from "react";

import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  name: string;
  description: string | null;
  categoryId: number;
  onPress?(): void;
};

const EntryItem: FC<props> = ({ name, description, categoryId, onPress }) => {
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

export default EntryItem;
