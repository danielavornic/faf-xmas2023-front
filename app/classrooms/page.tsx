"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import TableClassrooms from "@/components/Tables/TableClassrooms";
import { classrooms } from "@/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/common/Loader";

const ClassroomsPage = () => {
  const { data, status } = useQuery({
    queryKey: ["groups"],
    queryFn: classrooms.getList,
  });

  return (
    <>
      <Breadcrumb pageName="Classrooms" hasAddButton />

      {status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <div className="flex flex-col gap-10">
          <TableClassrooms classroomsData={data} />
        </div>
      )}
    </>
  );
};

export default ClassroomsPage;
