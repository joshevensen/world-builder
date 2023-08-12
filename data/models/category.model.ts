export interface ICategory {
  id: number;
  name: string;
  icon: string;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}

export class Category implements ICategory {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public description = null,
    public created_at = new Date(),
    public updated_at = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
