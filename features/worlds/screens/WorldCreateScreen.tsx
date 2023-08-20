import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { WorldCreateProp } from "../../../navigation/WorldNavigation";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import LibCard from "../../../general/library/Card";
import LibFormButtons from "../../../general/library/FormButtons";
import LibFormField from "../../../general/library/FormField";
import LibInput from "../../../general/library/Input";
import LibTextArea from "../../../general/library/TextArea";

const WorldCreateScreen: FC<WorldCreateProp> = ({ navigation }) => {
  function closeModal() {
    navigation.goBack();
  }

  function save() {
    closeModal();
  }

  function cancel() {
    closeModal();
  }

  return (
    <ScreenWrapper>
      <LibCard>
        <LibFormField label="Name">
          <LibInput />
        </LibFormField>

        <LibFormField label="Description">
          <LibTextArea placeholder="optional" />
        </LibFormField>

        <LibFormButtons onSave={save} onCancel={cancel} />
      </LibCard>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default WorldCreateScreen;
