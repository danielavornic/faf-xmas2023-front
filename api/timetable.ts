import { axios } from "@/lib/axios";

export const timetable = {
  getByParams: async (params?: any) => {
    const { data } = await axios.get("/timetable", params);
    return data;
  },
};
