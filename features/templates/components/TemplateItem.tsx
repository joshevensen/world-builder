import { Text, StyleSheet, Pressable } from "react-native";
import { FC } from "react";
import { Category } from "../../../data/models/category.model";
import { useNavigation } from "@react-navigation/native";
import { TemplateViewNavigationType } from "../../../navigation/TemplateNavigation";
import CONSTANTS from "../../../general/helpers/constants";
import LibCard from "../../../general/library/Card";

type props = {
  id: number;
  name: string;
  description: string | null;
  category: Category;
};

const TemplateItem: FC<props> = ({ id, name, description, category }) => {
  const navigation = useNavigation<TemplateViewNavigationType>();

  return (
    <LibCard style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("TemplateView", { templateId: id });
        }}
      >
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

export default TemplateItem;
