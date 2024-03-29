export interface Plant {
  id: number;
  name: string;
  schedule: number;
  watered: Date[];
  next_water: Date;
}

export type PlantCreate = Pick<Plant, "name" | "schedule">;

export interface PlantDate {
  plant_id: number[];
  date: string;
}

export type PlantEdit = Pick<Plant, "id" | "name" | "schedule">;
