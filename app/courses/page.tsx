import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Course } from "@/types/course";
import TableGroups from "@/components/Tables/TableGroups";

import { Metadata } from "next";
import TableCourses from "@/components/Tables/TableCourses";
export const metadata: Metadata = {
  title: "Courses",
  // other metadata
};

const courseData: Course[] = [
  {
    id: 1,
    name: "Introduction to Programming",
    theoryNrLessons: 30,
    practiceNrLessons: 20,
    labNrLessons: 10,
    year: 1,
    semester: 1,
  },
  {
    id: 2,
    name: "Data Structures",
    theoryNrLessons: 40,
    practiceNrLessons: 15,
    labNrLessons: 15,
    year: 2,
    semester: 1,
  },
  {
    id: 3,
    name: "Web Development",
    theoryNrLessons: 25,
    practiceNrLessons: 25,
    labNrLessons: 20,
    year: 2,
    semester: 2,
  },
];

const CoursesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Courses" hasAddButton />

      <div className="flex flex-col gap-10">
        <TableCourses courseData={courseData} />
      </div>
    </>
  );
};

export default CoursesPage;
