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
          <View>
            <Pressable onPress={item.onPress}>
              <View
                style={[styles.row, item.includeArrow && styles.rowWithArrow]}
              >
                <View
                  style={[
                    styles.left,
                    item.includeArrow && styles.leftWithArrow,
                  ]}
                >
                  {item.icon && (
                    <LibIcon
                      style={styles.rowIcon}
                      name={item.icon}
                      size={CONSTANTS.SIZE.icon.sm}
                    />
                  )}
                  <View>
                    <LibText style={styles.rowLabel}>{item.label}</LibText>
                    {item.description && (
                      <LibText style={styles.rowDescription}>
                        {item.description}
                      </LibText>
                    )}
                  </View>
                </View>

                <View style={styles.right}>
                  {item.includeArrow && (
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
  row: {
    padding: CONSTANTS.SPACING[3],
    backgroundColor: CONSTANTS.COLORS.backgroundColor.card,
  },
  rowWithArrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: CONSTANTS.SPACING[1],
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
  rowDescription: {
    marginTop: CONSTANTS.SPACING[0.5],
    color: CONSTANTS.COLORS.color.muted,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftWithArrow: {
    flexShrink: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: CONSTANTS.SPACING[2],
  },
});

export default LibList;
