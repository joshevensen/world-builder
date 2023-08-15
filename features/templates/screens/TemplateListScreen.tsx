import { FC } from "react";
import { FlatList } from "react-native";

import templatesData from "../../../data/dummy/templates.data";
import TemplateItem from "../components/TemplateItem";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateListProp } from "../../../navigation/MainNavigation";

const TemplateListScreen: FC<TemplateListProp> = ({ navigation }) => {
  function goToTemplate(templateId: number) {
    navigation.navigate("TemplateView", { templateId: templateId });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={templatesData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <TemplateItem
              name={item.name}
              description={item.description}
              category={item.category}
              onPress={goToTemplate.bind("templateId", item.id)}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default TemplateListScreen;
