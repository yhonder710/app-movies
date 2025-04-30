import { useQuery } from "@tanstack/react-query"
import { useApiStore } from "../stores/apiStore"
import { useFilterMovies } from "../hooks/filterMovies"
import { HomeTemplate } from "../components/templates/HomeTemplate"
import { Sidebar } from "../components/organismos/Sidebar"
import { useEffect } from "react"
import { Cargando } from "../components/moleculas/Cargando"



export function Home() {
  const { fetchProducts, setPage, numberPage, resetLimit } = useApiStore()





  const { data, refetch, isFetching } = useQuery({ queryKey: ["mostrar productos"], queryFn: fetchProducts })

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
