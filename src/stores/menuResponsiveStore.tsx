import { create } from "zustand";

interface Props {
  btnMenu: boolean
  togleMenu: () => void
}

export const menuResponsiveStore = create<Props>((set) => ({
  btnMenu: false,
  togleMenu: () => set((state) => ({ btnMenu: !state.btnMenu }))
}))
