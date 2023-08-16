import { IWorld } from "../interfaces/world.interface";

export const MostAwesomeWorld: IWorld = {
  id: 1,
  name: "Most Awesome World",
  description: null,
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const AwesomeWorld: IWorld = {
  id: 2,
  name: "Awesome World",
  description: null,
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export default [MostAwesomeWorld, AwesomeWorld];
