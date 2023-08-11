import { Entry } from "../models/entry.model";
import {
  CharacterTemplate,
  CityTemplate,
  GuildTemplate,
  WeaponTemplate,
} from "./templates.data";

export default [
  new Entry(1, CharacterTemplate, "John Doe"),
  new Entry(2, CharacterTemplate, "Jane Doe"),
  new Entry(3, GuildTemplate, "Merchant's Guild"),
  new Entry(4, CityTemplate, "Mills Creek"),
  new Entry(5, WeaponTemplate, "Sword"),
  new Entry(6, WeaponTemplate, "Axe"),
];
