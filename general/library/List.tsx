import { FC } from "react";
import { Pressable, SectionList, StyleSheet, View, Text } from "react-native";
import CONSTANTS from "../helpers/constants";
import LibIcon from "./Icon";
import LibText from "./Text";

export interface ListItem {
  id: any;
  label: string;
  subText?: string;
  description?: string;
  icon?: string;
  includeArrow?: boolean;
  onPress?(): void;
}

type props = {
  sections: { title: string | null; data: ListItem[] }[];
};

const LibList: FC<props> = ({ sections }) => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Pressable onPress={item.onPress}>
              <View style={styles.row}>
                <View style={styles.left}>
                  {item.icon && (
                    <LibIcon
                      style={styles.rowIcon}
                      name={item.icon}
                      size={CONSTANTS.SIZE.icon.sm}
                    />
                  )}
                  <View>
                    <LibText style={styles.rowLabel}>{item.label}</LibText>
                  </View>
                </View>

                <View style={styles.right}>
                  {item.subText && (
                    <Text style={styles.rowSubText}>{item.subText}</Text>
                  )}
                  {item.includeArrow && (
                    <LibIcon
                      style={styles.arrowIcon}
                      name={CONSTANTS.ICON.right}
                    />
                  )}
                </View>
              </View>
              {item.description && (
                <View
                  style={[
                    !!item.icon && styles.descriptionContainerWithIcon,
                    item.includeArrow && styles.descriptionContainerWithArrow,
                  ]}
                >
                  <LibText style={styles.description}>
                    {item.description}
                  </LibText>
                </View>
              )}
            </Pressable>
          </View>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.headerText}>{title?.toUpperCase()}</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>}
    />
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginTop: CONSTANTS.SPACING[4],
    marginBottom: CONSTANTS.SPACING[1],
    paddingLeft: CONSTANTS.SPACING[3],
    color: CONSTANTS.COLORS.color.muted,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderColor: CONSTANTS.COLORS.borderColor.list,
  },
  container: {
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
    paddingRight: CONSTANTS.SPACING[1],
    paddingLeft: CONSTANTS.SPACING[3],
    paddingVertical: CONSTANTS.SPACING[2],
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowIcon: {
    marginRight: CONSTANTS.SPACING[3],
  },
  rowLabel: {
    fontSize: CONSTANTS.SIZE.font.lg,
  },
  rowSubText: {
    color: CONSTANTS.COLORS.color.muted,
    fontSize: CONSTANTS.SIZE.font.md,
  },
  left: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: CONSTANTS.SPACING[2],
  },
  descriptionContainerWithIcon: {
    paddingLeft: CONSTANTS.SPACING[9],
  },
  descriptionContainerWithArrow: {
    paddingRight: CONSTANTS.SPACING[10],
  },
  description: {
    marginTop: CONSTANTS.SPACING[0.5],
    color: CONSTANTS.COLORS.color.muted,
  },
});

export default LibList;
