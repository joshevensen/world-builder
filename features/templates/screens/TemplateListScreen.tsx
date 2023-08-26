import { FC } from "react";
const _ = require("lodash");

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateListProp } from "../../../navigation/MainNavigation";
import { useAppDispatch, useAppSelector } from "../../../general/helpers/hooks";
import {
  selectTemmplatesByCategory,
  setActiveTemplateId,
} from "../../../store/redux/templates.reducer";
import LibList, { ListItem } from "../../../general/library/List";
import { ITemplate } from "../../../data/interfaces/template.interface";
import categories from "../../../data/static/categories";

const TemplateListScreen: FC<TemplateListProp> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  function goToTemplate(templateId: number | undefined) {
    if (templateId) {
      dispatch(setActiveTemplateId(templateId));
      navigation.navigate("TemplateView", { templateId: templateId });
    }
  }

  const categorySections: { title: string; data: ListItem[] }[] = [];

  categories.forEach((category) => {
    const templates = useAppSelector(selectTemmplatesByCategory(category.id));

    if (templates.length) {
      categorySections.push({
        title: category.name,
        data: templates.map((template: ITemplate) => {
          return {
            id: template.id,
            label: template.name,
            description: _.truncate(template.description, { length: 42 }),
            includeArrow: true,
            onPress: goToTemplate.bind("templateId", template.id),
          };
        }),
      });
    }
  });

  return (
    <ScreenWrapper>
      <LibList sections={categorySections} />
    </ScreenWrapper>
  );
};

export default TemplateListScreen;
