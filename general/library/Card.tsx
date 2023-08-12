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
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={styles.card}>{children}</View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: CONSTANTS.SPACING[4],
    backgroundColor: CONSTANTS.COLORS.cardBackground,
  },
});

export default LibCard;
