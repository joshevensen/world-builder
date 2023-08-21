import { FC } from "react";
import { StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";
import LibText from "./Text";

type props = {
  children: any;
  label: string;
  errorMessage: string | undefined;
};

const LibFormField: FC<props> = ({ children, label, errorMessage }) => {
  return (
    <View style={styles.container}>
      <LibText style={styles.label}>{label}</LibText>
      {children}
      {errorMessage && (
        <LibText style={styles.errorMessage}>{errorMessage}</LibText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: CONSTANTS.SPACING[4],
  },
  label: {
    marginBottom: CONSTANTS.SPACING[1],
  },
  errorMessage: {
    marginTop: CONSTANTS.SPACING[1],
    color: CONSTANTS.COLORS.color.error,
  },
});

export default LibFormField;
