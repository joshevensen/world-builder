import { FieldType } from "../enums/FieldType.enum";
import { Field } from "../models/field.model";
import { Template } from "../models/template.model";
import {
  OrganizationsCategory,
  ItemsCategory,
  PlacesCategory,
  PeopleCategory,
} from "./categories.data";
import { AwesomeWorld } from "./worlds.data";

export const CharacterTemplate = new Template(
  1,
  AwesomeWorld,
  PeopleCategory,
  "Character",
  null,
  [
    new Field(1, FieldType.Number, 2, "Age"),
    new Field(2, FieldType.Select, 1, "Type", [
      { label: "Main", value: "main" },
      { label: "Supporting", value: "supporting" },
    ]),
  ]
);

export const GuildTemplate = new Template(
  2,
  AwesomeWorld,
  OrganizationsCategory,
  "Guild",
  null
);

export const CityTemplate = new Template(
  3,
  AwesomeWorld,
  PlacesCategory,
  "City",
  null,
  [
    new Field(3, FieldType.Number, 1, "Population"),
    new Field(4, FieldType.Text, 1, "Mayor"),
  ]
);

export const WeaponTemplate = new Template(
  4,
  AwesomeWorld,
  ItemsCategory,
  "Weapon",
  null,
  [
    new Field(5, FieldType.Select, 1, "Type", [
      { label: "Melee", value: "melee" },
      { label: "Ranged", value: "ranged" },
    ]),
  ]
);

export default [CharacterTemplate, GuildTemplate, CityTemplate, WeaponTemplate];
