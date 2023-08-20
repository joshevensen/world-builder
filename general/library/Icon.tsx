import { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CONSTANTS from "../helpers/constants";

type props = {
  name: any;
  size?: number;
  color?: string;
  style?: any;
};

const LibIcon: FC<props> = ({
  name,
  style,
  size = CONSTANTS.SIZE.icon.md,
  color = CONSTANTS.COLORS.color.text,
}) => {
  return (
    <MaterialCommunityIcons
      style={style}
      name={name}
      size={size}
      color={color}
    />
  );
};

export default LibIcon;
