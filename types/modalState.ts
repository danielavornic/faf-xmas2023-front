export type ModalType = "Professor" | "Group" | "TimeTableEntry";

export type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  data: any;
};
