import { axios } from "@/lib/axios";

export const groups = {
  getList: async () => {
    const { data } = await axios.get("/groups");
    return data;
  },

  add: async (payload: any) => {
    const { data } = await axios.post("/groups", payload);
    return data;
  },
};
