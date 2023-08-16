import { FC } from "react";
import { View } from "react-native";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateCreateProp } from "../../../navigation/MainNavigation";
import LibButton from "../../../general/library/Button";

const TemplateCreateScreen: FC<TemplateCreateProp> = ({ navigation }) => {
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

export default TemplateCreateScreen;
