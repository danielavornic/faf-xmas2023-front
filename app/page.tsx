import Calendar from "@/components/Calendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timetable",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Calendar />
    </>
  );
}
