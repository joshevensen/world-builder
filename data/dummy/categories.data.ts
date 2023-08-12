import { Category } from "../models/category.model";

export const AnimalCategory = new Category(1, "Animal", "Animals");
export const PlantCategory = new Category(2, "Plant", "Plants");
export const ItemCategory = new Category(3, "Item", "Items");
export const GroupCategory = new Category(4, "Group", "Groups");
export const PlaceCategory = new Category(5, "Place", "Places");
export const EventCategory = new Category(6, "Event", "Events");
export const KnowledgeCategory = new Category(7, "Knowledge", "Knowledge");

export default [
  AnimalCategory,
  PlantCategory,
  ItemCategory,
  GroupCategory,
  PlaceCategory,
  EventCategory,
  KnowledgeCategory,
];
