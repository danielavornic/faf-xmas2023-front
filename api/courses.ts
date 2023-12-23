import { axios } from "@/lib/axios";

export const courses = {
  getList: async () => {
    const { data } = await axios.get("/courses");
    return data;
  },
};
