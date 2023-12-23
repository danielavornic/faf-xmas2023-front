import { axios } from "@/lib/axios";

export const professors = {
  getList: async () => {
    const { data } = await axios.get("/professors");
    return data;
  },

  update: async (id: number, payload: any) => {
    const { data } = await axios.put(`/professors/${id}`, payload);
    return data;
  },
};
