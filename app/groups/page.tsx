"use client";

import { groups } from "@/api";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableGroups from "@/components/Tables/TableGroups";
import Loader from "@/components/common/Loader";
import { openModal } from "@/slices/modalSlice";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const GroupsPage = () => {
  const { data, status } = useQuery({
    queryKey: ["classrooms"],
    queryFn: groups.getList,
  });

  const modalState = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: "Group",
        data: {
          /* Some data */
        },
      })
    );
  };

  return (
    <>
      <Breadcrumb click={handleOpenModal} pageName="Groups" hasAddButton />

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
