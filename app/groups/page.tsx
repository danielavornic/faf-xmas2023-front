"use client";
import { Group } from "@/types/group";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableGroups from "@/components/Tables/TableGroups";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../slices/modalSlice";
import { RootState } from "../../store/store";

// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Groups",
//   // other metadata
// };

const groupData: Group[] = [
  {
    id: 1,
    name: "AI-231",
    language: "en",
    studentCount: 25,
    courses: [
      {
        id: 1,
        name: "Mathematics",
      },
      {
        id: 2,
        name: "AMS",
      },
      {
        id: 3,
        name: "Mecanica Teoretica",
      },
      {
        id: 4,
        name: "ALGA",
      },
      {
        id: 5,
        name: "PSA",
      },
      {
        id: 6,
        name: "Discrete Mathematics",
      },
      {
        id: 7,
        name: "Computer Graphics",
      },
      {
        id: 8,
        name: "Object Oriented Programming",
      },
      {
        id: 9,
        name: "Object Oriented Programming",
      },
    ],
  },
];

const GroupsPage = () => {
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

      <div className="flex flex-col gap-10">
        <TableGroups groupData={groupData} />
      </div>
    </>
  );
};

export default GroupsPage;
