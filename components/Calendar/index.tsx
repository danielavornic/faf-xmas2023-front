import { TimetableDay, TimetableEntry } from "@/types/timetable";
import CalendarEntry from "../CalendarEntry";
import Loader from "../common/Loader";

const fillMissingPeriods = (data: TimetableDay[]) => {
  const MAX_PERIOD = 7; // Assuming a maximum of 7 periods in a day

  return data.map((dayData) => {
    const periodsFilled: { [key: number]: TimetableEntry | null } = {};

    dayData.classes.forEach((entry) => {
      periodsFilled[entry.period] = entry;
    });

    return {
      ...dayData,
      classes: Array.from(
        { length: MAX_PERIOD },
        (_, i) => periodsFilled[i + 1] || null
      ),
    };
  });
};

const Calendar = ({ data }: { data: TimetableDay[] }) => {
  if (!data) return <Loader />;

  let mappedDataWithNulls = fillMissingPeriods(data);

  const renderCalendarEntry = (entry: TimetableEntry | null) => {
    if (entry === null) {
      return (
        <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
      );
    } else {
      return (
        <td
          className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"
          key={entry.period}
        >
          <CalendarEntry
            courseName={entry.courseName}
            type={entry.type}
            group={entry.group}
            classroom={entry.classroom}
            period={entry.period}
            professor={entry.professor}
          />
        </td>
      );
    }
  };

  return (
    <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-calendar w-full rounded-t-sm bg-primary text-white">
            <th className="h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5" />
            <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                1
              </span>
              8:00 - 9:30
            </th>
            <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                2
              </span>{" "}
              9:45 - 11:15
            </th>
            <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                3
              </span>
              11:30 - 13:00
            </th>
            <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                4
              </span>{" "}
              13:30 - 15:00
            </th>
            <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                5
              </span>{" "}
              15:15 - 16:45
            </th>
            <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                6
              </span>
              17:00 - 18:30
            </th>
            <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
              <span className="mr-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-accent-foreground px-2.5 py-0.5 text-xs print:hidden">
                7
              </span>{" "}
              18:45 - 20:15
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Monday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Monday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 1)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Monday --> */}
          {/* <!-- Tuesday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Tuesday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 2)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Tuesday --> */}
          {/* <!-- Wednesday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[70px] absolute left-0 right-0 -rotate-90">
                Wednesday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 3)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Wednesday --> */}
          {/* <!-- Thursday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[65px] absolute left-0 right-0 -rotate-90">
                Thursday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 4)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Thursday --> */}
          {/* <!-- Friday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Friday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 5)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Friday --> */}
          {/* <!-- Saturday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Saturday
              </p>
            </td>
            {mappedDataWithNulls
              ?.find((day) => day.day === 6)
              ?.classes.map((entry, i) => renderCalendarEntry(entry))}
          </tr>
          {/* <!-- Saturday --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
