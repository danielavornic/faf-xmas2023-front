import { Course } from "./course";

export type Professor = {
  id: number;
  name: string;
  type: string;
  course: string;
  availability: {
    monday: number[];
    tuesday: number[];
    wednesday: number[];
    thursday: number[];
    friday: number[];
    saturday: number[];
  };
};
