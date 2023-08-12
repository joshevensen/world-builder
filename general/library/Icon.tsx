import { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CONSTANTS from "../helpers/constants";

type props = {
  name: any;
  size?: number;
  color?: string;
};

const LibIcon: FC<props> = ({
  name,
  size = CONSTANTS.ICON_SIZE.md,
  color = CONSTANTS.COLORS.primary,
}) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default LibIcon;
