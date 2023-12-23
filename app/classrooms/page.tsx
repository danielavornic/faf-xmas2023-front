import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Course } from "@/types/course";
import TableGroups from "@/components/Tables/TableGroups";

import { Metadata } from "next";
import TableCourses from "@/components/Tables/TableCourses";
import TableClassrooms from "@/components/Tables/TableClassrooms";
import { Classroom } from "@/types/classroom";
export const metadata: Metadata = {
  title: "Classrooms",
  // other metadata
};

const classroomsData: Classroom[] = [
  {
    id: 1,
    name: "101",
    type: "laboratory",
    capacity: 25,
  },
  {
    id: 2,
    name: "3-3",
    type: "lecture",
    capacity: 100,
  },
  {
    id: 3,
    name: "3-4",
    type: "lecture",
    capacity: 100,
  },
];

const ClassroomsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Classrooms" hasAddButton />

      <div className="flex flex-col gap-10">
        <TableClassrooms classroomsData={classroomsData} />
      </div>
    </>
  );
};

export default ClassroomsPage;
