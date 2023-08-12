import { Entry } from "../models/entry.model";
import {
  CharacterTemplate,
  CityTemplate,
  GuildTemplate,
  WeaponTemplate,
} from "./templates.data";
import { AwesomeWorld } from "./worlds.data";

export default [
  new Entry(1, AwesomeWorld, CharacterTemplate, "John Doe", "A Friend"),
  new Entry(2, AwesomeWorld, CharacterTemplate, "Jane Doe"),
  new Entry(3, AwesomeWorld, GuildTemplate, "Merchant's Guild"),
  new Entry(4, AwesomeWorld, CityTemplate, "Mills Creek"),
  new Entry(5, AwesomeWorld, WeaponTemplate, "Sword"),
  new Entry(6, AwesomeWorld, WeaponTemplate, "Axe"),
];
