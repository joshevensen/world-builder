import { IEntry } from "../interfaces/entry.interface";
import {
  CharacterTemplate,
  CityTemplate,
  GodsTemplate,
  GuildTemplate,
  HumansTemplate,
  WeaponTemplate,
} from "./templates.data";
import { AwesomeWorld, MostAwesomeWorld } from "./worlds.data";

const JohnDoe: IEntry = {
  id: 1,
  world_id: AwesomeWorld.id,
  template_id: HumansTemplate.id,
  category_id: HumansTemplate.category_id,
  name: "John Doe",
  description: "A friend",
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const JaneDoe: IEntry = {
  id: 2,
  world_id: MostAwesomeWorld.id,
  template_id: CharacterTemplate.id,
  category_id: CharacterTemplate.category_id,
  name: "Jane Doe",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const MerchantsGuild: IEntry = {
  id: 3,
  world_id: AwesomeWorld.id,
  template_id: GuildTemplate.id,
  category_id: GuildTemplate.category_id,
  name: "Merchant's Guild",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const MillsCreek: IEntry = {
  id: 4,
  world_id: AwesomeWorld.id,
  template_id: CityTemplate.id,
  category_id: CityTemplate.category_id,
  name: "Mills Creek",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const Sword: IEntry = {
  id: 5,
  world_id: AwesomeWorld.id,
  template_id: WeaponTemplate.id,
  category_id: WeaponTemplate.category_id,
  name: "Sword",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const Axe: IEntry = {
  id: 6,
  world_id: AwesomeWorld.id,
  template_id: WeaponTemplate.id,
  category_id: WeaponTemplate.category_id,
  name: "Axe",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const Odin: IEntry = {
  id: 7,
  world_id: AwesomeWorld.id,
  template_id: GodsTemplate.id,
  category_id: GodsTemplate.category_id,
  name: "Odin",
  description: null,
  fields: [],
  relationships: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export default [JohnDoe, JaneDoe, MerchantsGuild, MillsCreek, Sword, Axe, Odin];
