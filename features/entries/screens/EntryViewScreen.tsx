import { FC, useLayoutEffect } from "react";

import entriesData from "../../../data/dummy/entries.data";
import { EntryViewProp } from "../../../navigation/MainNavigation";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import LibCard from "../../../general/library/Card";
import LibText from "../../../general/library/Text";

const EntryViewScreen: FC<EntryViewProp> = ({ navigation, route }) => {
  const entry = entriesData.find((entry) => entry.id === route.params.entryId);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: entry?.name });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <LibCard>
        <LibText>{entry?.name}</LibText>
        <LibText>{entry?.description}</LibText>
      </LibCard>
    </ScreenWrapper>
  );
};

export default EntryViewScreen;
