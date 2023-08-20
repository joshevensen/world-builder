import { FC } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  placeholder?: string;
  type?: KeyboardTypeOptions;
};

const LibInput: FC<props> = ({ placeholder, type = "default" }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: CONSTANTS.SPACING[3],
    paddingVertical: CONSTANTS.SPACING[2],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.inputs,
    borderRadius: CONSTANTS.SIZE.radius.sm,
    overflow: "hidden",
  },
  input: {
    color: CONSTANTS.COLORS.color.inputs,
  },
});

export default LibInput;
