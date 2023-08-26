export interface IWorld {
  id: number;
  name: string;
  description: string | null;
  counts: {
    people: number;
    creatures: number;
    plants: number;
    items: number;
    organizations: number;
    places: number;
    events: number;
    knowledge: number;
    entries: number;
    lists: number;
    templates: number;
  };
  created_at: string;
  updated_at: string;
}

export interface IWorldCreate {
  name: string;
  description: string | null;
}

export type ICount = {
  [key: string]: number;
};
