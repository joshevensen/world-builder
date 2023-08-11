import { FC } from "react";
import { FlatList } from "react-native";
import entriesData from "../../../data/dummy/entries.data";
import EntryItem from "../components/EntryItem";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";

const EntryListScreen: FC = () => {
  return (
    <ScreenWrapper>
      <FlatList
        data={entriesData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          const itemProps = {
            id: item.id,
            name: item.name,
            description: item.description,
            category: item.category,
          };

          return <EntryItem {...itemProps} />;
        }}
      />
    </ScreenWrapper>
  );
};

export default EntryListScreen;
