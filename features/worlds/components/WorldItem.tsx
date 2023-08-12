import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { WorldViewNavigationType } from "../../../navigation/MainNavigation";
import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  id: number;
  name: string;
  description: string | null;
};

const WorldItem: FC<props> = ({ id, name, description }) => {
  const navigation = useNavigation<WorldViewNavigationType>();

  function goToWorldView() {
    navigation.navigate("WorldView", { worldId: id });
  }

  return (
    <LibCard style={styles.container}>
      <Pressable onPress={goToWorldView}>
        <Text>{name}</Text>
      </Pressable>
    </LibCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: CONSTANTS.SPACING[5],
  },
});

export default WorldItem;
