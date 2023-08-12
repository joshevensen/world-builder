import { Category } from "./category.model";
import { Field } from "./field.model";
import { Template } from "./template.model";
import { World } from "./world.model";

export interface IEntry {
  id: number;
  world?: World;
  template?: Template;
  category: Category;
  name: string;
  description: string | null;
  fields?: Field[];
  relationships?: Entry[];
  created_at?: Date;
  updated_at?: Date;
}

export class Entry implements IEntry {
  category: Category;
  fields: Field[];

  constructor(
    public id: number,
    public world: World,
    public template: Template,
    public name: string,
    public description: string | null = null,
    public relationships: Entry[] = [],
    public created_at = new Date(),
    public updated_at = new Date()
  ) {
    this.id = id;
    this.world = world;
    this.template = template;
    this.category = template.category;
    this.name = name;
    this.description = description;
    this.fields = template.fields;
    this.relationships = relationships;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
