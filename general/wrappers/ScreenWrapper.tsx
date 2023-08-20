import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import CONSTANTS from "../helpers/constants";

type props = {
  children: ReactNode;
};

const ScreenWrapper: FC<props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: CONSTANTS.SPACING[4],
    paddingVertical: CONSTANTS.SPACING[6],
  },
});

export default ScreenWrapper;
