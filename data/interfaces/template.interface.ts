import { IField } from "./field.interface";

export interface ITemplate {
  id: number;
  world_id: number;
  category_id: number;
  name: string;
  description: string | null;
  fields?: IField[];
  created_at?: string;
  updated_at?: string;
}
