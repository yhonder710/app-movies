import { useQuery } from "@tanstack/react-query"
import { useApiStore } from "../stores/apiStore"
import { useFilterMovies } from "../hooks/filterMovies"
import { HomeTemplate } from "../components/templates/HomeTemplate"
import { Sidebar } from "../components/organismos/Sidebar"
import { useEffect } from "react"
import { Cargando } from "../components/moleculas/Cargando"



export function Home() {
  const { fetchMovies, setPage, numberPage, resetLimit } = useApiStore()

  const { data, refetch, isFetching } = useQuery({ queryKey: ["mostrar lista de movies"], queryFn: fetchMovies, staleTime: Infinity })

  useEffect(() => {
    setPage(numberPage)
    resetLimit()
    refetch()
  }, [numberPage])

  const { filterMovies } = useFilterMovies(data)

  return (
    <>
      <Sidebar />
      {isFetching ? <Cargando /> : <HomeTemplate filterMovies={filterMovies} />}
    </>
  )
}
