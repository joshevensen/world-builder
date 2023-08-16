import { FC } from "react";
import { FlatList } from "react-native";

import entriesData from "../../../data/dummy/entries.data";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { EntryListProp } from "../../../navigation/MainNavigation";
import EntryItem from "../components/EntryItem";

const EntryListScreen: FC<EntryListProp> = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const entries = entriesData.filter(
    (entry) => entry.category_id === categoryId
  );

  function goToEntry(entryId: number) {
    navigation.navigate("EntryView", { entryId: entryId });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={entries}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <EntryItem
              name={item.name}
              description={item.description}
              categoryId={item.category_id}
              onPress={goToEntry.bind("entryId", item.id)}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default EntryListScreen;
