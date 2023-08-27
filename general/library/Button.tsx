import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CONSTANTS from "../helpers/constants";
import Icon from "./Icon";

type props = {
  children?: any;
  icon?: any;
  onPress?(): void;
  mode?: "outline" | "flat" | "icon" | null;
  iconSize?: number;
  color?: string;
  textColor?: string;
  style?: any;
};

const LibButton: FC<props> = ({
  children,
  onPress,
  mode,
  icon,
  iconSize = CONSTANTS.SIZE.icon.sm,
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

  if (mode === "icon") {
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
            mode === "flat" && styles.buttonFlat,
            mode === "icon" && styles.buttonIcon,
            { borderColor: borderColor, backgroundColor: backgroundColor },
          ]}
        >
          {mode !== "icon" && (
            <Text style={[styles.text, { color: buttonTextColor }]}>
              {children}
            </Text>
          )}
          {mode === "icon" && (
            <Icon name={icon} size={iconSize} color={color} />
          )}
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
  buttonFlat: {
    borderWidth: 0,
    paddingHorizontal: CONSTANTS.SPACING[1],
  },
  buttonIcon: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
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
