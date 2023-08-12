import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SPACING } from "../helpers/constants";
import Icon from "./Icon";

type props = {
  icon: any;
  size: number;
  color: string;
  onPress(): void;
};

const IconButton: FC<props> = ({ icon, size, color, onPress }) => {
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
    padding: SPACING[1],
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
