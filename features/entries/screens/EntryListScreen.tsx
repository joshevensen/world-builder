import { FC } from "react";
const _ = require("lodash");

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { EntryListProp } from "../../../navigation/MainNavigation";
import LibList, { ListItem } from "../../../general/library/List";
import { useAppSelector } from "../../../general/helpers/hooks";
import { selectEntriesByCategory } from "../../../store/entries.reducer";
import { IEntry } from "../../../data/interfaces/entry.interface";
import { selectTemmplatesByCategory } from "../../../store/templates.reducer";
import { ITemplate } from "../../../data/interfaces/template.interface";

const EntryListScreen: FC<EntryListProp> = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const entries = useAppSelector(selectEntriesByCategory(categoryId));
  const templates = useAppSelector(selectTemmplatesByCategory(categoryId));

  const templateSections: { title: string; data: ListItem[] }[] = [];

  if (templates.length) {
    templates.forEach((template: ITemplate) => {
      const templateEntries = entries.filter(
        (entry: IEntry) => entry.template_id === template.id
      );

      if (templateEntries.length) {
        templateSections.push({
          title: template.name,
          data: templateEntries.map((entry: IEntry) => {
            return {
              id: entry.id,
              label: entry.name,
              description: _.truncate(entry.description, { length: 42 }),
              includeArrow: true,
              onPress: goToEntry.bind("entryId", entry.id),
            };
          }),
        });
      }
    });
  }

  function goToEntry(entryId: number) {
    navigation.navigate("EntryView", { entryId: entryId });
  }

  return (
    <ScreenWrapper>
      <LibList sections={templateSections} />
    </ScreenWrapper>
  );
};

export default EntryListScreen;
