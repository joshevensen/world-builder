import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  children: any;
  onPress?(): void;
  includeArrow?: boolean;
  style?: any;
};

const LibCard: FC<props> = ({ children, onPress, style }) => {
  return (
    <View style={[style]}>
      <Pressable onPress={onPress}>
        <View style={[styles.card]}>
          <View>{children}</View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: CONSTANTS.SPACING[3],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
  },
});

export default LibCard;
