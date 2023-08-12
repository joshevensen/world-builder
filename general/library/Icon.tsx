import { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type props = {
  name: any;
  size: number;
  color: string;
};

const Icon: FC<props> = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
