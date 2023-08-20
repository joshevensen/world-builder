import { FC } from "react";
import { StyleSheet } from "react-native";

import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";
import LibText from "../../../general/library/Text";

type props = {
  id: number;
  name: string;
  description: string | null;
  onPress?(): void;
};

const WorldItem: FC<props> = ({ id, name, description, onPress }) => {
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

export default WorldItem;
