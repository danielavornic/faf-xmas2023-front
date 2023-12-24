"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../slices/modalSlice";
import { RootState } from "../../store/store";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Professor } from "@/types/professor";
import { professors } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@/types/course";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const days2 = [
  0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
  1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
];

const periodsPerDay = 7; // Assuming there are 7 periods per day
const headers = days.flatMap((day) =>
  Array.from({ length: periodsPerDay }, (_, i) => `${day}_${i + 1}`)
);

const tableHeaders = headers.map((header, key) => (
  <th key={key} className="py-4 px-4 font-medium text-black dark:text-white">
    {header}
  </th>
));

const Page = () => {
  const modalState = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleOpenModal = (index: number) => {
    const subjectNames: string[] = data?.[index].courses.map(
      (course: Partial<Course>) => {
        return course.name ?? "Unknown";
      }
    );
    dispatch(
      openModal({
        type: "Professor",
        data: {
          name: "Daniela Vornic",
          availability: days2,
          subjects: subjectNames,
        },
      })
    );
  };

  const { data } = useQuery({
    queryKey: ["professors"],
    queryFn: () => professors.getList(),
  });

  return (
    <>
      <Breadcrumb pageName="Professors" hasAddButton />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Type
                </th>
                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                  Courses
                </th>
                {tableHeaders}
              </tr>
            </thead>
            <tbody>
              {data?.map((profItem: any, key: number) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button
                        className="hover:text-primary"
                        onClick={() => handleOpenModal(0)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-pencil"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                          <path d="M13.5 6.5l4 4" />
                        </svg>
                      </button>
                      <button className="hover:text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trash"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {profItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    {profItem.courses.map(
                      (subjectItem: Course, key: number) => (
                        <span key={key} className="text-black dark:text-white">
                          {subjectItem.name}
                          {key < profItem.courses.length - 1 ? ", " : ""}
                        </span>
                      )
                    )}
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {profItem.type}
                    </p>
                  </td>
                  {days2.map((day, key) => {
                    return (
                      <td
                        key={key}
                        className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                      >
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                            day === 1
                              ? "text-success bg-success"
                              : "text-danger bg-danger"
                          }`}
                        >
                          {day === 1 ? "Available" : "Unavailable"}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
