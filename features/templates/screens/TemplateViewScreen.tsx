import { FC, useLayoutEffect } from "react";
import { Text, View } from "react-native";

import { TemplateViewProp } from "../../../navigation/MainNavigation";
import { selectActiveTemplate } from "../../../store/redux/templates.reducer";
import { useAppSelector } from "../../../general/helpers/hooks";

const TemplateViewScreen: FC<TemplateViewProp> = ({ route, navigation }) => {
  const template = useAppSelector(selectActiveTemplate);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: template?.name });
  }, [navigation]);

  return (
    <View>
      <Text>{template?.name}</Text>
      <Text>{template?.description}</Text>
    </View>
  );
};

export default TemplateViewScreen;
