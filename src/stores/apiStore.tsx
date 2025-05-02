import { create } from 'zustand'
import { API } from '../interfaces/movies'


interface apiStore {
  numberPage: number
  page: number
  fetchMovies: () => Promise<API[]>
  setPage: (newPage: number) => void;
  nextNumber: () => void
  previosNumber: () => void
  limit: number
  aumentarLimit: () => void
  resetLimit: () => void
  resetNumber: () => void
}


export const useApiStore = create<apiStore>()((set, get) => ({
  numberPage: 0,
  page: 0,
  limit: 20,
  fetchMovies: async () => {
    const { page } = get()
    const endpoint = `https://api.tvmaze.com/shows?page=${page}`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  },
  setPage: (newPage: number) => set({ page: newPage }),
  nextNumber: () => set((state) => ({ numberPage: state.numberPage + 1 })),
  resetNumber: () => set((state) => ({ numberPage: state.numberPage = 0 })),
  previosNumber: () => set((state) => ({ numberPage: state.numberPage - 1 })),
  aumentarLimit: () => set((state) => ({ limit: state.limit + 20 })),
  resetLimit: () => set((state) => ({ limit: state.limit = 20 }))
}))

