"use client";

import Calendar from "@/components/Calendar";
import { Classroom } from "@/types/classroom";
import { Group } from "@/types/group";
import { useRouter, useSearchParams } from "next/navigation";

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

const CalendarPage = () => {
  const { push } = useRouter();
  const filterType = useSearchParams().get("filterType");
  const name = useSearchParams().get("name");

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterType = e.target.value;
    push(`/timetable?filterType=${filterType}`);

    if (filterType === "group") {
      push(`/timetable?filterType=${filterType}&name=${groupData[0].name}`);
    } else if (filterType === "classroom") {
      push(
        `/timetable?filterType=${filterType}&name=${classroomsData[0].name}`
      );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    push(`/timetable?filterType=${filterType}&name=${name}`);
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Timetable
        </h2>

        <div className="flex space-x-3">
          <div className="relative z-20 bg-transparent dark:bg-form-input">
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
              value={name || groupData[0].name}
              name="name"
              onChange={handleFilterTypeChange}
              className="relative z-20 w-full min-w-[300px] appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              {filterType === "group"
                ? groupData.map((group) => (
                    <option key={group.id} value={group.name}>
                      {group.name}
                    </option>
                  ))
                : classroomsData.map((classroom) => (
                    <option key={classroom.id} value={classroom.name}>
                      {classroom.name}
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

          <button className="inline-flex items-center justify-center gap-2.5 bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
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

      <Calendar />
    </>
  );
};

export default CalendarPage;
