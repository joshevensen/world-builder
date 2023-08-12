import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { WorldViewNavigationType } from "../../../navigation/MainNavigation";

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
    <View style={styles.container}>
      <Pressable onPress={goToWorldView}>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default WorldItem;
