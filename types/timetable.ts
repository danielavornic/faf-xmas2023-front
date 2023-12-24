export interface TimetableEntry {
  classId: number;
  courseName: string;
  type: "Lecture" | "Laboratory" | "Seminar";
  group: string;

  professor: string; //
  dayOfWeek: number;
  period: number;
  classroom: string;
}

export interface TimetableDay {
  day: number;
  courses: TimetableEntry[];
}
