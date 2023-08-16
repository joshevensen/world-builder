import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  id: number;
  name: string;
  description: string | null;
  onPress?(): void;
};

const WorldItem: FC<props> = ({ id, name, description, onPress }) => {
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

export default WorldItem;
