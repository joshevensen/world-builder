import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CONSTANTS, { ICONS } from "../helpers/constants";
import LibIcon from "./Icon";

type props = {
  children: any;
  onPress?(): void;
  includeArrow?: boolean;
  style?: any;
};

const LibCard: FC<props> = ({
  children,
  onPress,
  includeArrow = false,
  style,
}) => {
  return (
    <View style={[style]}>
      <Pressable onPress={onPress}>
        <View style={[styles.card, includeArrow && styles.cardWithArrow]}>
          <View style={includeArrow && styles.childrenWithArrow}>
            {children}
          </View>
          {includeArrow && (
            <LibIcon style={styles.icon} name={CONSTANTS.ICON.right} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: CONSTANTS.SPACING[3],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
    borderRadius: CONSTANTS.SIZE.radius.md,
  },
  cardWithArrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: CONSTANTS.SPACING[1],
  },
  childrenWithArrow: {
    flexShrink: 1,
  },
  icon: {
    marginLeft: CONSTANTS.SPACING[2],
  },
});

export default LibCard;
