import { FC } from "react";
import { FlatList } from "react-native";
import templatesData from "../../../data/dummy/templates.data";
import TemplateItem from "../components/TemplateItem";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";

const TemplateListScreen: FC = () => {
  return (
    <ScreenWrapper>
      <FlatList
        data={templatesData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          const itemProps = {
            id: item.id,
            name: item.name,
            description: item.description,
            category: item.category,
          };

          return <TemplateItem {...itemProps} />;
        }}
      />
    </ScreenWrapper>
  );
};

export default TemplateListScreen;
