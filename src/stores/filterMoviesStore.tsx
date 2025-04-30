import { create } from "zustand";

//------genre
interface StoreFilterGenre {
  filterGenre: string;
  changeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const useFilterGenreStore = create<StoreFilterGenre>((set) => ({
  filterGenre: 'all',
  changeGenre: (e) => set({ filterGenre: e.target.value })
}))

//-----year
interface StoreFilterYear {
  filterYear: string;
  changeYear: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const useFilterYearStore = create<StoreFilterYear>((set) => ({
  filterYear: 'all',
  changeYear: (e) => set({ filterYear: e.target.value })
}))

//-----name

interface StoreFilterName {
  filterName: string;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFilterNameStore = create<StoreFilterName>((set) => ({
  filterName: '',
  changeName: (e) => set({ filterName: e.target.value })
}))



