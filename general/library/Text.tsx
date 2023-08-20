import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  children: any;
  style?: any;
};

const LibText: FC<props> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: CONSTANTS.COLORS.color.text,
  },
});

export default LibText;
