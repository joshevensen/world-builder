import { FC } from "react";
import { StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";
import LibText from "./Text";

type props = {
  children: any;
  label: string;
};

const LibFormField: FC<props> = ({ children, label }) => {
  return (
    <View style={styles.container}>
      <LibText style={styles.label}>{label}</LibText>
      {children}
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
});

export default LibFormField;
