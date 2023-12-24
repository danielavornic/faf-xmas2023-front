export interface TimetableEntry {
  classId: number;
  courseName: string;
  type: "lecture" | "laboratory" | "seminar";
  group: string;

  professor: string; //
  day: number;
  period: number;
  classroom: string;
}

export interface TimetableDay {
  day: number;
  classes: TimetableEntry[];
}
