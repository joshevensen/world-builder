import { FC } from "react";
import { View } from "react-native";
import { WorldCreateProp } from "../../../navigation/WorldNavigation";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import LibButton from "../../../general/library/Button";

const WorldCreateScreen: FC<WorldCreateProp> = ({ navigation }) => {
  function closeModal() {
    navigation.goBack();
  }

  function save() {
    closeModal();
  }

  return (
    <ScreenWrapper>
      <View>
        <LibButton mode="outline" onPress={closeModal}>
          Cancel
        </LibButton>
        <LibButton onPress={save}>Save</LibButton>
      </View>
    </ScreenWrapper>
  );
};

export default WorldCreateScreen;
