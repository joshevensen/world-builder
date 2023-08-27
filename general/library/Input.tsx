import { FC, useState } from "react";
import { StyleSheet, TextInput, View, KeyboardTypeOptions } from "react-native";
import { Controller, FieldError } from "react-hook-form";

import CONSTANTS from "../helpers/constants";
import LibText from "./Text";

type props = {
  name: string;
  label: string;
  control: any;
  rules: any;
  errors: FieldError | undefined;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  isMultiline?: boolean;
  includeMargins?: boolean;
};

const LibInput: FC<props> = ({
  name,
  label,
  control,
  rules,
  errors,
  placeholder,
  type = "default",
  isMultiline = false,
  includeMargins = false,
}) => {
  const errorMessage = errors && errors.message;
  const [inputHeight, setInputHeight] = useState(CONSTANTS.SPACING[20]);

  return (
    <View style={[styles.wrapper, includeMargins && styles.wrapperWithMargins]}>
      <View style={[styles.field, isMultiline && styles.multilineField]}>
        <LibText style={styles.label}>{label}</LibText>

        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={[
                styles.inputContainer,
                isMultiline && styles.multilineContainer,
                !!errors && styles.errorContainer,
              ]}
            >
              <TextInput
                style={[
                  styles.input,
                  isMultiline && styles.multilineInput,
                  isMultiline && {
                    flexBasis: Math.max(CONSTANTS.SPACING[20], inputHeight),
                  },
                ]}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={CONSTANTS.COLORS.color.muted}
                keyboardType={type}
                clearButtonMode="while-editing"
                multiline={isMultiline}
                onContentSizeChange={({ nativeEvent }) => {
                  if (isMultiline) {
                    setInputHeight(
                      nativeEvent.contentSize.height + CONSTANTS.SPACING[2]
                    );
                  }
                }}
              />
            </View>
          )}
          name={name}
        />
      </View>

      {errorMessage && (
        <LibText style={styles.errorMessage}>{errorMessage}</LibText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
  },
  wrapperWithMargins: {
    marginVertical: CONSTANTS.SPACING[2],
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
  },
  multilineField: {
    flexDirection: "column",
    alignItems: "stretch",
    paddingTop: CONSTANTS.SPACING[2],
  },
  label: {
    minWidth: 80,
    paddingHorizontal: CONSTANTS.SPACING[3],
    fontSize: CONSTANTS.SIZE.font.sm,
  },
  inputContainer: {
    flex: 1,
  },
  multilineContainer: {
    marginTop: CONSTANTS.SPACING[1],
    flex: 0,
  },
  errorContainer: {
    borderBottomColor: CONSTANTS.PALETTE.red[500],
    borderBottomWidth: 1,
  },
  input: {
    padding: CONSTANTS.SPACING[3],
    color: CONSTANTS.COLORS.color.text,
    fontSize: CONSTANTS.SIZE.font.md,
  },
  multilineInput: {
    paddingTop: CONSTANTS.SPACING[1],
    paddingBottom: CONSTANTS.SPACING[2],
    textAlignVertical: "top",
  },
  errorMessage: {
    marginTop: CONSTANTS.SPACING[1],
    color: CONSTANTS.COLORS.color.error,
    textAlign: "right",
  },
});

export default LibInput;
