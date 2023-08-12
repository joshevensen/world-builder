import { Text, View, StyleSheet, Pressable } from "react-native";
import { FC } from "react";
import { Category } from "../../../data/models/category.model";
import { useNavigation } from "@react-navigation/native";
import { TemplateViewNavigationType } from "../../../navigation/TemplateNavigation";

type props = {
  id: number;
  name: string;
  description: string | null;
  category: Category;
};

const TemplateItem: FC<props> = ({ id, name, description, category }) => {
  const navigation = useNavigation<TemplateViewNavigationType>();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("TemplateView", { templateId: id });
        }}
      >
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

export default TemplateItem;
