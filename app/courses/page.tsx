"use client";

import { useQuery } from "@tanstack/react-query";

import { courses } from "@/api";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCourses from "@/components/Tables/TableCourses";
import Loader from "@/components/common/Loader";

const CoursesPage = () => {
  const { data, status } = useQuery({
    queryKey: ["courses"],
    queryFn: courses.getList,
  });

  return (
    <>
      <Breadcrumb pageName="Courses" hasAddButton />

      {status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <div className="flex flex-col gap-10">
          <TableCourses courseData={data} />
        </div>
      )}
    </>
  );
};

export default CoursesPage;
