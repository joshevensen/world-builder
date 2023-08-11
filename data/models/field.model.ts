import { FieldType } from "../enums/FieldType.enum";

export interface IOption {
  label: string;
  value: any;
}

export interface IField {
  id: number;
  type: FieldType;
  order: number;
  label: string;
  options: IOption[];
  defaultValue: any;
  value: any;
  created_at: Date;
  updated_at: Date;
}

export class Field {
  constructor(
    public id: number,
    public type: FieldType,
    public order: number,
    public label: string,
    public options: IOption[] = [],
    public defaultValue = null,
    public value = null,
    public created_at = new Date(),
    public updated_at = new Date()
  ) {
    this.id = id;
    this.type = type;
    this.order = order;
    this.label = label;
    this.options = options;
    this.defaultValue = defaultValue;
    this.value = value;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
