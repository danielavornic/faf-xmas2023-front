import { axios } from "@/lib/axios";

export const professors = {
  getList: async () => {
    const { data } = await axios.get("/teachers");
    return data;
  },

  update: async (id: number, payload: any) => {
    const { data } = await axios.patch(`/teachers/${id}`, payload);
    return data;
  },
};
