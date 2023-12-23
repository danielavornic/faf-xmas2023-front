import { Course } from "./course";

export type Group = {
  id: number;
  name: string;
  language: string;
  studentCount: number;
  courses: Partial<Course>[];
};
