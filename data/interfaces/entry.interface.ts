import { IField } from "./field.interface";
import { IRelationship } from "./relationship.interface";

export interface IEntry {
  id: number;
  world_id: number;
  template_id: number;
  category_id: number;
  name: string;
  description: string | null;
  fields?: IField[];
  relationships?: IRelationship[];
  created_at: string;
  updated_at: string;
}
