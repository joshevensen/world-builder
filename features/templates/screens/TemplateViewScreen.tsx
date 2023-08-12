import { FC } from "react";
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

  navigation.setOptions({ headerTitle: template?.name });

  return (
    <View>
      <Text>{template?.name}</Text>
      <Text>{template?.description}</Text>
    </View>
  );
};

export default TemplateViewScreen;
