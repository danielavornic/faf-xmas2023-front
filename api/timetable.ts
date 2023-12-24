import { axios } from "@/lib/axios";

export const timetable = {
  getByParams: async (params?: any) => {
    const { data } = await axios.get("/timetable", params);
    return data;
  },

  editEntryById: async (id: number, entry: any) => {
    const { data } = await axios.patch(`/timetable/${id}`, entry);
    return data;
  },
};
