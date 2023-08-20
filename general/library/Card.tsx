import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  children: any;
  onPress?(): void;
  style?: any;
};

const LibCard: FC<props> = ({ children, onPress, style }) => {
  return (
    <View style={[style]}>
      <Pressable onPress={onPress}>
        <View style={styles.card}>{children}</View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    padding: CONSTANTS.SPACING[3],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
    borderRadius: CONSTANTS.SIZE.radius.md,
  },
});

export default LibCard;
