import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type props = {
  children: ReactNode;
};

const ScreenWrapper: FC<props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default ScreenWrapper;
