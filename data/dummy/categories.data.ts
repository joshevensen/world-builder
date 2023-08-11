import { Category } from "../models/category.model";

export const GeneralCategory = new Category(1, "General");
export const PersonCategory = new Category(2, "Person");
export const GroupCategory = new Category(3, "Group");
export const LocationCategory = new Category(4, "Location");
export const EventCategory = new Category(5, "Event");
export const ItemCategory = new Category(6, "Item");

export default [
  GeneralCategory,
  PersonCategory,
  GroupCategory,
  LocationCategory,
  EventCategory,
  ItemCategory,
];
