import { FC } from "react";
import { StyleSheet, View } from "react-native";

import CONSTANTS from "../helpers/constants";
import LibButton from "./Button";

type props = {
  onSave(): void;
  onCancel(): void;
};

const LibFormButtons: FC<props> = ({ onSave, onCancel }) => {
  return (
    <View style={styles.buttonContainer}>
      <LibButton style={styles.buttonCancel} mode="outline" onPress={onCancel}>
        Cancel
      </LibButton>

      <LibButton style={styles.buttonSave} onPress={onSave}>
        Save
      </LibButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: CONSTANTS.SPACING[4],
  },
  buttonCancel: {
    flex: 1,
    marginRight: CONSTANTS.SPACING[2],
  },
  buttonSave: {
    flex: 1,
    marginLeft: CONSTANTS.SPACING[2],
  },
});

export default LibFormButtons;
