import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeModal } from "../slices/modalSlice";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, type, data } = useSelector((state: RootState) => state.modal);
  const [days2, setDays2] = useState([
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
  ]);

  const updateDay = (index: number, newValue: number) => {
    setDays2((currentDays) =>
      currentDays.map((item, idx) => (idx === index ? newValue : item))
    );
  };

  const handleUpdate = (index: number) => {
    const newValue = days2[index] === 1 ? 0 : 1;
    updateDay(index, newValue);
  };

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderContent = () => {
    switch (type) {
      case "Professor":
        return (
          <div className="pt-[20px]">
            <h3 className="font-bold text-2xl text-center">Editare profesor</h3>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
              <input
                type="text"
                className="w-full rounded border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline mt-2"
                placeholder="Professor Name"
              />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Subject
              <div className="mb-4.5 mt-2">
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select className="text-[12px] relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="">GK</option>
                    <option value="">Graphics</option>
                    <option value="">Java</option>
                    <option value="">Math</option>
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
                      } w-full h-[25px] justify-center items-center flex text-white`}
                    >
                      {day + " " + (i + 1)}
                    </div>
                  ));
                })}
              </div>
            </label>
            <div className="flex gap-2">
              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-4">
                Edit
              </button>
              <button
                className="flex w-full justify-center rounded bg-[#ccc] p-3 font-medium text-gray mt-4"
                onClick={handleModalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        );
      case "Group":
        // Handle Group type
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
        className="relative w-11/12 bg-white rounded-lg shadow-xl md:w-3/4 lg:w-1/2"
        onClick={handleContentClick}
      >
        <button
          onClick={handleModalClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Modal;
