import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
}

interface ModalAction {
  onClose: () => void;
  onOpen: () => void;
}

const useModal = create<ModalState & ModalAction>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModal;
