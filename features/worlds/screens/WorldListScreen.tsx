import { FC } from "react";
import { FlatList } from "react-native";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import WorldItem from "../components/WorldItem";
import worldsData from "../../../data/dummy/worlds.data";
import { WorldListScreenType } from "../../../navigation/MainNavigation";
import LibButton from "../../../general/library/Button";
import LibIconButton from "../../../general/library/IconButton";
import CONSTANTS from "../../../general/helpers/constants";

const WorldListScreen: FC<WorldListScreenType> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <LibButton>Create World</LibButton>

      <FlatList
        data={worldsData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          const itemProps = {
            id: item.id,
            name: item.name,
            description: item.description,
          };

          return <WorldItem {...itemProps} />;
        }}
      />
    </ScreenWrapper>
  );
};

export default WorldListScreen;
