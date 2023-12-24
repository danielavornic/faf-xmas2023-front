import { GiOpenBook } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { FaComputerMouse } from "react-icons/fa6";
import { TimetableEntry } from "@/types/timetable";

interface CalendarEntryProps {
  entry: TimetableEntry;
}

const CalendarEntry = ({
  entry: { courseName, type, group, id, day, classroom, professor },
}: CalendarEntryProps) => {
  return (
    <div
      className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30"
      title={`${courseName} (${type})`}
    >
      <div className="event invisible absolute left-2 print:top-1 right-2 z-99 mb-1 flex w-[93%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:group-hover:bg-primary group-hover:bg-primary dark:bg-meta-4 md:visible md:opacity-100">
        <p className="event-name flex items-center font-semibold space-x-2 text-sm text-black dark:text-white group-hover:text-white">
          <div>
            {
              {
                lecture: <GiOpenBook />,
                laboratory: <FaComputerMouse />,
                seminar: <FaPencilRuler />,
              }[type]
            }
          </div>
          <span>
            {courseName} ({group})
          </span>
        </p>
        <span className="time text-sm font-medium text-black dark:text-white group-hover:text-white">
          {professor}
        </span>
        <span className="time text-sm font-medium text-black dark:text-white group-hover:text-white">
          {classroom}
        </span>
      </div>
    </div>
  );
};

export default CalendarEntry;
