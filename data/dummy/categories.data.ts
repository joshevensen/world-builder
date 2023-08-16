import CONSTANTS from "../../general/helpers/constants";
import { ICategory } from "../interfaces/category.interface";

export const PeopleCategory: ICategory = {
  id: 1,
  name: "People",
  icon: CONSTANTS.ICON.people,
  description: null,
};

export const CreaturesCategory: ICategory = {
  id: 2,
  name: "Creatures",
  icon: CONSTANTS.ICON.creatures,
  description: null,
};

export const PlantsCategory: ICategory = {
  id: 3,
  name: "Plants",
  icon: CONSTANTS.ICON.plants,
  description: null,
};

export const ItemsCategory: ICategory = {
  id: 4,
  name: "Items",
  icon: CONSTANTS.ICON.items,
  description: null,
};

export const OrganizationsCategory: ICategory = {
  id: 5,
  name: "Organizations",
  icon: CONSTANTS.ICON.organizations,
  description: null,
};

export const PlacesCategory: ICategory = {
  id: 6,
  name: "Places",
  icon: CONSTANTS.ICON.places,
  description: null,
};

export const EventsCategory: ICategory = {
  id: 7,
  name: "Events",
  icon: CONSTANTS.ICON.events,
  description: null,
};

export const KnowledgeCategory: ICategory = {
  id: 8,
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
