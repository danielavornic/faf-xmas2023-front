import { Course } from "./course";

export type Professor = {
  id: number;
  name: string;
  type: string;
  courses: Partial<Course>[];
  availability: {
    monday: number[];
    tuesday: number[];
    wednesday: number[];
    thursday: number[];
    friday: number[];
    saturday: number[];
  };
};
