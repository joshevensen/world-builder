import { IWorld } from "../interfaces/world.interface";

export const MostAwesomeWorld: IWorld = {
  id: 1,
  name: "Most Awesome World",
  description: null,
  counts: {
    people: 1,
    creatures: 0,
    plants: 0,
    items: 0,
    organizations: 0,
    places: 0,
    events: 0,
    knowledge: 0,
    entries: 1,
    lists: 0,
    templates: 1,
  },
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const AwesomeWorld: IWorld = {
  id: 2,
  name: "Awesome World",
  description: null,
  counts: {
    people: 2,
    creatures: 0,
    plants: 0,
    items: 2,
    organizations: 1,
    places: 2,
    events: 0,
    knowledge: 0,
    entries: 7,
    lists: 0,
    templates: 6,
  },
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export default [MostAwesomeWorld, AwesomeWorld];
