import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  children: any;
  onPress?(): void;
  mode?: "outline" | "flat" | null;
  color?: string;
  textColor?: string;
  style?: any;
};

const LibButton: FC<props> = ({
  children,
  onPress,
  mode,
  color = CONSTANTS.COLORS.primary,
  textColor = CONSTANTS.PALETTE.white,
  style,
}) => {
  let borderColor = color;
  let backgroundColor = color;
  let buttonTextColor = textColor;

  if (mode === "outline") {
    backgroundColor = "transparent";
    buttonTextColor = color;
  }

  if (mode === "flat") {
    borderColor = "transparent";
    backgroundColor = "transparent";
    buttonTextColor = color;
  }

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[
            styles.button,
            { borderColor: borderColor, backgroundColor: backgroundColor },
          ]}
        >
          <Text style={[styles.text, { color: buttonTextColor }]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: CONSTANTS.SIZE.radius.sm,
    borderWidth: 1,
    paddingHorizontal: CONSTANTS.SPACING[4],
    paddingVertical: CONSTANTS.SPACING[2],
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default LibButton;
