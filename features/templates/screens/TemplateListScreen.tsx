import { FC } from "react";
import { FlatList } from "react-native";

import TemplateItem from "../components/TemplateItem";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateListProp } from "../../../navigation/MainNavigation";
import { useAppDispatch, useAppSelector } from "../../../general/helpers/hooks";
import {
  selectTemplatesByName,
  setActiveTemplateId,
} from "../../../store/redux/templates.reducer";

const TemplateListScreen: FC<TemplateListProp> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const templates = useAppSelector(selectTemplatesByName);

  function goToTemplate(templateId: number) {
    dispatch(setActiveTemplateId(templateId));
    navigation.navigate("TemplateView", { templateId: templateId });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={templates}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <TemplateItem
              name={item.name}
              description={item.description}
              categoryId={item.category_id}
              onPress={goToTemplate.bind("templateId", item.id)}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default TemplateListScreen;
