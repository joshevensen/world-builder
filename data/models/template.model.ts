import { Category } from "./category.model";
import { Field } from "./field.model";
import { World } from "./world.model";

export interface ITemplate {
  id: number;
  world: World;
  category: Category;
  name: string;
  description: string | null;
  fields?: Field[];
  created_at?: Date;
  updated_at?: Date;
}

export class Template implements ITemplate {
  constructor(
    public id: number,
    public world: World,
    public category: Category,
    public name: string,
    public description = null,
    public fields: Field[] = [],
    public created_at = new Date(),
    public updated_at = new Date()
  ) {
    this.id = id;
    this.world = world;
    this.category = category;
    this.name = name;
    this.description = description;
    this.fields = fields;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}