export interface TimetableEntry {
  classId: number;
  courseName: string;
  type: "Course" | "Lab" | "Seminar";
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
