import CONSTANTS from "../../general/helpers/constants";
import { Category } from "../models/category.model";

export const PeopleCategory = new Category(1, "People", CONSTANTS.ICON.people);
export const CreaturesCategory = new Category(
  2,
  "Creatures",
  CONSTANTS.ICON.creatures
);
export const PlantsCategory = new Category(3, "Plants", CONSTANTS.ICON.plants);
export const ItemsCategory = new Category(4, "Items", CONSTANTS.ICON.items);
export const OrganizationsCategory = new Category(
  5,
  "Organizations",
  CONSTANTS.ICON.organizations
);
export const PlacesCategory = new Category(6, "Places", CONSTANTS.ICON.places);
export const EventsCategory = new Category(7, "Evens", CONSTANTS.ICON.events);
export const KnowledgeCategory = new Category(
  8,
  "Knowledge",
  CONSTANTS.ICON.knowledge
);

export default [
  PeopleCategory,
  CreaturesCategory,
  PlantsCategory,
  ItemsCategory,
  OrganizationsCategory,
  PlacesCategory,
  EventsCategory,
  KnowledgeCategory,
];
