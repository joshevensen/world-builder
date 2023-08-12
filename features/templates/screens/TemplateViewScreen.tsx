import { FC, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { TemplateViewScreenType } from "../../../navigation/TemplateNavigation";
import templatesData from "../../../data/dummy/templates.data";

const TemplateViewScreen: FC<TemplateViewScreenType> = ({
  route,
  navigation,
}) => {
  const template = templatesData.find(
    (template) => template.id === route.params.templateId
  );

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
