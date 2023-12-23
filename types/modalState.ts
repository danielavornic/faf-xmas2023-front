export type ModalType = 'Professor' | 'Group';

export type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  data: any;
}