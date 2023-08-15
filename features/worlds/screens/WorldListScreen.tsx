import { FC } from "react";
import { FlatList } from "react-native";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import WorldItem from "../components/WorldItem";
import worldsData from "../../../data/dummy/worlds.data";
import { WorldListProp } from "../../../navigation/WorldNavigation";

const WorldListScreen: FC<WorldListProp> = ({ navigation }) => {
  function goToWorld(worldId: number) {
    navigation.navigate("World", { worldId: worldId });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={worldsData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <WorldItem
              id={item.id}
              name={item.name}
              description={item.description}
              onPress={goToWorld.bind("worldId", item.id)}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default WorldListScreen;
