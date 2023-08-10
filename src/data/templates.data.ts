import { FieldType } from "../enums/FieldType.enum";
import { Field } from "../models/field.model";
import { Template } from "../models/template.model";
import { PersonCategory } from "./categories.data";

export const CharacterTemplate = new Template(
  1,
  PersonCategory,
  "Character",
  null,
  [
    new Field(1, FieldType.Number, 2, "Age"),
    new Field(2, FieldType.Text, 1, "Type", [
      { label: "Main", value: "main" },
      { label: "Supporting", value: "supporting" },
    ]),
  ]
);
