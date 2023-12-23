"use client";

import { groups } from "@/api";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableGroups from "@/components/Tables/TableGroups";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

const GroupsPage = () => {
  const { data, status } = useQuery({
    queryKey: ["classrooms"],
    queryFn: groups.getList,
  });

  return (
    <>
      <Breadcrumb pageName="Groups" hasAddButton />

      {status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <span>Error: {data}</span>
      ) : (
        <div className="flex flex-col gap-10">
          <TableGroups groupData={data} />
        </div>
      )}
    </>
  );
};

export default GroupsPage;
