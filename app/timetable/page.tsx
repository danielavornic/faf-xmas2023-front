"use client";

import { classrooms, groups, professors, timetable } from "@/api";
import Calendar from "@/components/Calendar";
import { useRouter, useSearchParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const CalendarPage = () => {
  const { push } = useRouter();
  const filterType = useSearchParams().get("filterType") || "group";
  const name = useSearchParams().get("name");

  const [listData, setListData] = useState([]);

  const { data: groupData } = useQuery({
    queryKey: ["groups"],
    queryFn: () => groups.getList(),
  });

  const { data: classroomsData } = useQuery({
    queryKey: ["classrooms"],
    queryFn: () => classrooms.getList(),
  });

  const { data: professorsData } = useQuery({
    queryKey: ["professors"],
    queryFn: () => professors.getList(),
  });

  const { data: timetableData } = useQuery({
    queryKey: ["timetable", filterType, name],
    queryFn: () => timetable.getByParams({ key: filterType, value: name }),
  });

  console.log(timetableData);

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterType = e.target.value;
    push(`/timetable?filterType=${filterType}`);

    if (filterType === "group") {
      push(`/timetable?filterType=${filterType}&name=${groupData?.[0]?.name}`);
      setListData(groupData);
    } else if (filterType === "classroom") {
      push(
        `/timetable?filterType=${filterType}&name=${classroomsData?.[0]?.name}`
      );
      setListData(classroomsData);
    } else {
      push(
        `/timetable?filterType=${filterType}&name=${professorsData?.[0]?.name}`
      );
      setListData(professorsData);
    }
  };

  useEffect(() => {
    setListData(groupData);
  }, [groupData]);

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    push(`/timetable?filterType=${filterType}&name=${name}`);
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Timetable
        </h2>

        <div className="flex items-center space-x-3">
          <div className="print:hidden  relative z-20 bg-transparent dark:bg-form-input">
            <select
              value={filterType || "group"}
              name="filterType"
              onChange={handleFilterTypeChange}
              className="relative z-20 w-full min-w-[150px] appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="group">Group</option>
              <option value="professor">Professor</option>
              <option value="classroom">Classroom</option>
            </select>
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </span>
          </div>

          <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select
              value={name || groupData?.[0].name}
              name="name"
              onChange={handleNameChange}
              className="relative z-20 w-full min-w-[300px] appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              {listData?.map((item: any, i: number) => (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </span>
          </div>

          <button
            onClick={() => window.print()}
            className="print:hidden inline-flex items-center justify-center gap-2.5 border border-primary p-[13.5px] text-center font-medium text-primary hover:bg-opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-printer"
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
              <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
              <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
              <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
            </svg>
          </button>

          <button className="print:hidden inline-flex items-center justify-center gap-2.5 bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-rotate-clockwise"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
              </svg>
            </span>
            Re-generate
          </button>
        </div>
      </div>

      <Calendar data={timetableData} />
    </>
  );
};

export default CalendarPage;
