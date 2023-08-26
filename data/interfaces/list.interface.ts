export interface IList {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface IListCreate {
  name: string;
  description: string | null;
}
