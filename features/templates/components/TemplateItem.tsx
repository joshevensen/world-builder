import { Text, View, StyleSheet, Pressable } from "react-native";
import { ITemplate } from "../../../data/models/template.model";
import { FC } from "react";

const TemplateItem: FC<ITemplate> = ({ id, name, description, category }) => {
  return (
    <View style={styles.container}>
      <Pressable>
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
