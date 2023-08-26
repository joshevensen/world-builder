import { FieldType } from "../enums/FieldType.enum";
import { ITemplate } from "../interfaces/template.interface";
import {
  OrganizationsCategory,
  ItemsCategory,
  PlacesCategory,
  PeopleCategory,
} from "../static/categories";
import { AwesomeWorld, MostAwesomeWorld } from "./worlds.data";

export const CharacterTemplate: ITemplate = {
  id: 1,
  world_id: MostAwesomeWorld.id,
  category_id: PeopleCategory.id,
  name: "Character",
  description: null,
  fields: [
    {
      order: 2,
      type: FieldType.Number,
      label: "Age",
    },
    {
      order: 1,
      type: FieldType.Select,
      label: "Type",
      options: [
        { label: "Main", value: "main" },
        { label: "Supporting", value: "supporting" },
      ],
    },
  ],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const GuildTemplate: ITemplate = {
  id: 2,
  world_id: AwesomeWorld.id,
  category_id: OrganizationsCategory.id,
  name: "Guild",
  description: null,
  fields: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const CityTemplate: ITemplate = {
  id: 3,
  world_id: AwesomeWorld.id,
  category_id: PlacesCategory.id,
  name: "City",
  description: null,
  fields: [
    {
      order: 1,
      type: FieldType.Number,
      label: "Population",
    },
    {
      order: 2,
      type: FieldType.Text,
      label: "Mayor",
    },
  ],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const WeaponTemplate: ITemplate = {
  id: 4,
  world_id: AwesomeWorld.id,
  category_id: ItemsCategory.id,
  name: "Weapon",
  description:
    "a thing designed or used for inflicting bodily harm or physical damage",
  fields: [
    {
      order: 1,
      type: FieldType.Select,
      label: "Type",
      options: [
        { label: "Melee", value: "melee" },
        { label: "Ranged", value: "ranged" },
      ],
    },
  ],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const CountryTemplate: ITemplate = {
  id: 5,
  world_id: AwesomeWorld.id,
  category_id: PlacesCategory.id,
  name: "Country",
  description: null,
  fields: [
    {
      order: 1,
      type: FieldType.Select,
      label: "Type",
      options: [
        { label: "Melee", value: "melee" },
        { label: "Ranged", value: "ranged" },
      ],
    },
  ],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const GodsTemplate: ITemplate = {
  id: 6,
  world_id: AwesomeWorld.id,
  category_id: PeopleCategory.id,
  name: "Gods",
  description: null,
  fields: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export const HumansTemplate: ITemplate = {
  id: 7,
  world_id: AwesomeWorld.id,
  category_id: PeopleCategory.id,
  name: "Humans",
  description: null,
  fields: [],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

export default [
  CharacterTemplate,
  GuildTemplate,
  CityTemplate,
  WeaponTemplate,
  CountryTemplate,
  GodsTemplate,
  HumansTemplate,
];
