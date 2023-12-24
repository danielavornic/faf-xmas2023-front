export interface TimetableEntry {
  classId: number;
  period: number;
  day: number;
  courseName: string;
  type: "lecture" | "laboratory" | "seminar";
  group: string;
  classroom: string;
  professor: string;
}

export interface TimetableDay {
  day: number;
  classes: TimetableEntry[];
}
