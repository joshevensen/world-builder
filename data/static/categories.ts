import CONSTANTS from "../../general/helpers/constants";
import { ICategory } from "../interfaces/category.interface";

export const PeopleCategory: ICategory = {
  id: "people",
  name: "People",
  icon: CONSTANTS.ICON.people,
  description: null,
};

export const CreaturesCategory: ICategory = {
  id: "creatures",
  name: "Creatures",
  icon: CONSTANTS.ICON.creatures,
  description: null,
};

export const PlantsCategory: ICategory = {
  id: "plants",
  name: "Plants",
  icon: CONSTANTS.ICON.plants,
  description: null,
};

export const ItemsCategory: ICategory = {
  id: "items",
  name: "Items",
  icon: CONSTANTS.ICON.items,
  description: null,
};

export const OrganizationsCategory: ICategory = {
  id: "organizations",
  name: "Organizations",
  icon: CONSTANTS.ICON.organizations,
  description: null,
};

export const PlacesCategory: ICategory = {
  id: "places",
  name: "Places",
  icon: CONSTANTS.ICON.places,
  description: null,
};

export const EventsCategory: ICategory = {
  id: "events",
  name: "Events",
  icon: CONSTANTS.ICON.events,
  description: null,
};

export const KnowledgeCategory: ICategory = {
  id: "knowledge",
  name: "Knowledge",
  icon: CONSTANTS.ICON.knowledge,
  description: null,
};

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
