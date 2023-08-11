import { Text, View, StyleSheet, Pressable } from "react-native";
import { IEntry } from "../../../data/models/entry.model";
import { FC } from "react";

const EntryItem: FC<IEntry> = ({ id, name, description, category }) => {
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

export default EntryItem;
