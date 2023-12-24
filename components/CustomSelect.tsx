import React, { useState, ChangeEvent } from "react";

type Parameters = {
  values: string[];
  labels: string[];
  // data: string[];
  selected: string;
  label: string;
  selectedProfessor: string;
  setSelectedProfessor: (value: string) => void;
};

const CustomSelect = ({
  values,
  labels,
  selected,
  label,
  selectedProfessor,
  setSelectedProfessor,
}: Parameters) => {
  const handleProfessorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfessor(e.target.value);
  };

  return (
    <div>
      <label className="block w-full mb-2 text-sm font-bold text-gray-700">
        {label}
        <div className="mb-4.5 mt-2">
          <div className="relative z-20 bg-transparent dark:bg-form-input focus:outline-none">
            <select
              value={selectedProfessor}
              onChange={handleProfessorChange}
              className="text-[14px] relative z-20 w-full appearance-none rounded border bg-transparent py-3 px-5 outline-none focus:outline-none transition active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              {values.map((professor, index) => (
                <option key={index} value={professor}>
                  {labels[index]}
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
        </div>
      </label>
    </div>
  );
};

export default CustomSelect;
