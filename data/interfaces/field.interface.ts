import { FieldType } from "../enums/FieldType.enum";

export interface IOption {
  label: string;
  value: any;
}

export interface IField {
  order: number;
  type: FieldType;
  label: string;
  options?: IOption[];
  defaultValue?: any;
  value?: any;
}
