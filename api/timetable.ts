import { axios } from "@/lib/axios";

export const timetable = {
  getByParams: async (params?: any) => {
    console.log(params);
    const { data } = await axios.get("/timetable", { params });
    return data;
  },

  checkModifiedEntry: async (id: number, entry: any) => {
    const { data } = await axios.get(`/timetable/${id}`, entry);
    return data;
  },

  updateEntryById: async (id: number, entry: any) => {
    const { data } = await axios.patch(`/timetable/${id}/update`, entry);
    return data;
  },
};
