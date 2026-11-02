import { create } from 'zustand';

export const useAppStore = create((set) => ({
  mobileMenuOpen: false,
  activeModal: null,
  modalPayload: null,
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  openModal: (activeModal, modalPayload = null) => set({ activeModal, modalPayload }),
  closeModal: () => set({ activeModal: null, modalPayload: null }),
}));
