import { FC } from "react";
import { Text, View } from "react-native";

import entriesData from "../../../data/dummy/entries.data";
import { EntryViewScreenType } from "../../../navigation/EntryNavigation";

const EntryViewScreen: FC<EntryViewScreenType> = ({ navigation, route }) => {
  const entry = entriesData.find((entry) => entry.id === route.params.entryId);

  navigation.setOptions({ headerTitle: entry?.name });

  return (
    <View>
      <Text>{entry?.name}</Text>
      <Text>{entry?.description}</Text>
    </View>
  );
};

export default EntryViewScreen;
