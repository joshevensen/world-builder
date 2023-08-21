import { FC } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  value: any;
  onChange(value: string): void;
  onBlur(): void;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  isMultiline?: boolean;
  hasErrors?: boolean;
};

const LibInput: FC<props> = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type = "default",
  isMultiline = false,
  hasErrors = false,
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        isMultiline && styles.multilineContainer,
        hasErrors && styles.errorContainer,
      ]}
    >
      <TextInput
        style={[styles.input, isMultiline && styles.multilineInput]}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={CONSTANTS.COLORS.color.muted}
        keyboardType={type}
        multiline={isMultiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: CONSTANTS.SPACING[3],
    paddingVertical: CONSTANTS.SPACING[2],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.inputs,
    overflow: "hidden",
  },
  multilineContainer: {
    minHeight: CONSTANTS.SPACING[20],
  },
  errorContainer: {
    backgroundColor: CONSTANTS.COLORS.backgroundColor.inputsError,
  },
  input: {
    color: CONSTANTS.COLORS.color.inputs,
  },
  multilineInput: {
    flex: 1,
    textAlignVertical: "top",
  },
});

export default LibInput;
