import { FC } from "react";
import { FlatList } from "react-native";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import WorldItem from "../components/WorldItem";
import worldsData from "../../../data/dummy/worlds.data";
import { WorldListScreenType } from "../../../navigation/MainNavigation";

const WorldListScreen: FC<WorldListScreenType> = ({ navigation }) => {
  return (
    <ScreenWrapper>
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
