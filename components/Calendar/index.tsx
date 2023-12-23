import CalendarEntry from "../CalendarEntry";

const Calendar = () => {
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
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32">
              <CalendarEntry
                courseName="AMS"
                type="laboratory"
                group="FAF-222"
                classroom="104"
                period={1}
                day={1}
                professor="Elena Cojuhari"
              />
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Monday --> */}
          {/* <!-- Tuesday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Tuesday
              </p>
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Tuesday --> */}
          {/* <!-- Wednesday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[70px] absolute left-0 right-0 -rotate-90">
                Wednesday
              </p>
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Wednesday --> */}
          {/* <!-- Thursday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[65px] absolute left-0 right-0 -rotate-90">
                Thursday
              </p>
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32">
              <CalendarEntry
                courseName="Computer Graphics"
                type="lecture"
                group="FAF-222"
                classroom="310"
                period={1}
                day={1}
                professor="Viorel Bostan"
              />
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Thursday --> */}
          {/* <!-- Friday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Friday
              </p>
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Friday --> */}
          {/* <!-- Saturday --> */}
          <tr className="grid grid-cols-calendar w-full">
            <td className="bg-primary p-2 h-24 md:h-25 md:p-6 xl:h-32 relative text-white">
              <p className="font-semibold transform top-[50px] absolute left-0 right-0 -rotate-90">
                Saturday
              </p>
            </td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
            <td className="ease relative h-24 border border-stroke p-2 dark:border-strokedark md:h-25 md:p-6 xl:h-32"></td>
          </tr>
          {/* <!-- Saturday --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
