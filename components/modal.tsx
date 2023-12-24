import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeModal } from "../slices/modalSlice";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons
import CustomSelect from "./CustomSelect";
import { useQuery } from "@tanstack/react-query";
import { classrooms, professors } from "@/api";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, type, data } = useSelector((state: RootState) => state.modal);
  const { data: professorsData } = useQuery({
    queryKey: ["professors"],
    queryFn: () => professors.getList(),
  });
  const professorNames = professorsData
    ? professorsData.map((professor: any) => professor.name)
    : [];

  const { data: classRoomData } = useQuery({
    queryKey: ["classrooms"],
    queryFn: () => classrooms.getList(),
  });

  const classroomsNames = classRoomData
    ? classRoomData.map((classroom: any) => classroom.name)
    : [];

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
  ];
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prevSelected) => {
      if (prevSelected.includes(subject)) {
        return prevSelected.filter((s) => s !== subject);
      } else {
        return [...prevSelected, subject];
      }
    });
  };
  const defaultAvailability = Array(42).fill(0);

  const [days2, setDays2] = useState(data?.availability || defaultAvailability);

  useEffect(() => {
    setDays2(data?.availability || defaultAvailability);
  }, [data?.availability]);

  const handleModalClose = () => {
    setDays2(data?.availability || defaultAvailability);
    setSelectedSubjects([]);
    dispatch(closeModal());
  };

  const updateDay = (index: number, newValue: number) => {
    setDays2((currentDays: any) =>
      currentDays.map((item: number, idx: number) =>
        idx === index ? newValue : item
      )
    );
  };

  const handleUpdate = (index: number) => {
    const newValue = days2[index] === 1 ? 0 : 1;
    updateDay(index, newValue);
  };

  if (!isOpen) {
    return null;
  }

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderContent = () => {
    switch (type) {
      case "Professor":
        return (
          <div className="pt-[20px]">
            <h3 className="font-bold text-2xl text-center">Edit professor</h3>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
              <input
                type="text"
                className="w-full dark:bg-form-input rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                value={data?.name}
              />
            </label>
            <label className="block mt-4 text-sm font-bold text-gray-700">
              Courses
            </label>
            <div className="grid grid-cols-3 gap-4 pt-2 pb-6">
              {data?.subjects.map((subject: any) => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`rounded-lg border p-2 ${
                    selectedSubjects.includes(subject)
                      ? "bg-gray-700 text-[#666699] font-bold"
                      : "bg-gray-200"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
            <label className="block text-sm font-bold text-gray-700">
              Availability
              <div className="grid grid-cols-6 gap-2 mt-2">
                {Array.from({ length: 7 }).map((_, i) => {
                  const val = true;
                  return days.map((day, j) => (
                    <div
                      key={`${i}-${j}`}
                      onClick={() => handleUpdate(i * 6 + j)}
                      className={`${
                        days2[i * 6 + j] == 1 ? "bg-[#00cc00]" : "bg-[#ff0000]"
                      } w-full h-[25px] justify-center items-center flex text-white cursor-pointer`}
                    >
                      {day + " " + (i + 1)}
                    </div>
                  ));
                })}
              </div>
            </label>
          </div>
        );
      case "Group":
        return (
          <div className="pt-[20px]">
            <h3 className="font-bold text-2xl text-center">Add new group</h3>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Professor
              <div className="mb-4.5 mt-2">
                <div className="relative z-20 bg-transparent dark:bg-form-input focus:outline-none">
                  <select className="text-[12px] relative z-20 w-full appearance-none rounded border bg-transparent py-3 px-5 outline-none focus:outline-none transition active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="">Mihai</option>
                    <option value="">Ion Luo</option>
                    <option value="">Dumitras Dumitru</option>
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
              </div>
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Language
              <div className="mb-4.5 mt-2">
                <div className="relative z-20 bg-transparent dark:bg-form-input focus:outline-none">
                  <select className="text-[12px] relative z-20 w-full appearance-none rounded border bg-transparent py-3 px-5 outline-none focus:outline-none transition active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="">en</option>
                    <option value="">ro</option>
                    <option value="">ru</option>
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
              </div>
            </label>

            <label className="block mb-2 text-sm font-bold text-gray-700 ">
              Number of students
              <input
                type="number"
                className="w-full dark:bg-form-input rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                placeholder="25"
              />
            </label>
            <label className="block mt-4 text-sm font-bold text-gray-700">
              Courses
            </label>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`rounded-lg border p-2 ${
                    selectedSubjects.includes(subject)
                      ? "bg-gray-700 text-[#666699] font-bold"
                      : "bg-gray-200"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        );
      case "TimeTableEntry":
        return (
          <div className="pt-[20px]">
            <h3 className="font-bold text-2xl text-center">Update entry</h3>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Course name
              <input
                type="text"
                disabled={true}
                className="w-full dark:bg-form-input rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                value={data?.name}
              />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Group
              <input
                type="text"
                disabled={true}
                className="w-full dark:bg-form-input rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                value={data?.group}
              />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Type
              <input
                type="text"
                disabled={true}
                className="w-full dark:bg-form-input rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                value={data?.type}
              />
            </label>
            <CustomSelect
              selected={data?.professor}
              data={professorNames}
              label="Professor"
            />
            <CustomSelect
              selected={data?.classroom}
              data={classroomsNames}
              label="Classroom"
            />
            <CustomSelect
              selected={data?.period}
              data={["1", "2", "3", "4", "5", "6", "7"]}
              label="Period"
            />
            <CustomSelect
              selected={data?.day}
              data={["1", "2", "3", "4", "5", "6"]}
              label="Day"
            />
            <p className="text-center text-[#DC143C]">Some error message</p>
          </div>
        );
        break;
      // Handle other types
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-[1000] cursor-pointer"
      onClick={handleModalClose}
    >
      <div
        className="relative w-11/12 bg-white rounded-lg shadow-xl md:w-3/4 lg:w-1/2 dark:bg-boxdark"
        onClick={handleContentClick}
      >
        <button
          onClick={handleModalClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>
        <div className="p-6">{renderContent()}</div>
        <div className="flex justify-end gap-4.5 pb-6 mr-6">
          <button
            onClick={handleModalClose}
            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
