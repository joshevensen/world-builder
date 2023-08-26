import { FC, useLayoutEffect } from "react";
import { View } from "react-native";

import { TemplateViewProp } from "../../../navigation/MainNavigation";
import { selectActiveTemplate } from "../../../store/templates.reducer";
import { useAppSelector } from "../../../general/helpers/hooks";
import LibText from "../../../general/library/Text";

const TemplateViewScreen: FC<TemplateViewProp> = ({ route, navigation }) => {
  const template = useAppSelector(selectActiveTemplate);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: template?.name });
  }, [navigation]);

  return (
    <View>
      <LibText>{template?.name}</LibText>
      <LibText>{template?.description}</LibText>
    </View>
  );
};

export default TemplateViewScreen;
