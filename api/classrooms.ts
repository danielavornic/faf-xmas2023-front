import { axios } from "@/lib/axios";

export const classrooms = {
  getList: async () => {
    const { data } = await axios.get("/classrooms");
    return data;
  },
};
