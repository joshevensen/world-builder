import { FC } from "react";
import { FlatList } from "react-native";

import { useAppDispatch, useAppSelector } from "../../../general/helpers/hooks";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import WorldItem from "../components/WorldItem";
import { WorldListProp } from "../../../navigation/WorldNavigation";
import { setActiveWorldId } from "../../../store/redux/worlds.reducer";

const WorldListScreen: FC<WorldListProp> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const worlds = useAppSelector((state) => state.worlds.all);

  function goToWorld(worldId: number) {
    dispatch(setActiveWorldId(worldId));
    navigation.navigate("World", { worldId: worldId });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={worlds}
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
