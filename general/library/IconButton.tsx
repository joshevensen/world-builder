import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";
import Icon from "./Icon";

type props = {
  icon: any;
  onPress?(): void;
  size?: number;
  color?: string;
};

const LibIconButton: FC<props> = ({ icon, onPress, size, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: CONSTANTS.SPACING[1],
  },
  pressed: {
    opacity: 0.75,
  },
});

export default LibIconButton;
