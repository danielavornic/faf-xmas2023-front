import { Course } from "./course";

export type Professor = {
  id: number;
  name: string;
  type: "theory" | "seminar" | "lab";
  courses: Partial<Course>[];
  days: number[];
};
