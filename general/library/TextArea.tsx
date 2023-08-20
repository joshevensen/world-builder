import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  placeholder?: string;
  style?: any;
};

const LibTextArea: FC<props> = ({ placeholder, style }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={CONSTANTS.COLORS.color.placeholder}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: CONSTANTS.SPACING[20],
    paddingHorizontal: CONSTANTS.SPACING[3],
    paddingVertical: CONSTANTS.SPACING[2],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.inputs,
    borderRadius: CONSTANTS.SIZE.radius.sm,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    color: CONSTANTS.COLORS.color.inputs,
    textAlignVertical: "top",
  },
});

export default LibTextArea;
