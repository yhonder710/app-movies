import { ListMovies } from "../organismos/ListMovies"
import { API } from "../../interfaces/movies"
import { BotonMasMovie } from "../moleculas/BotonMasMovie"

interface Props {
  filterMovies: API[] | undefined
}

export function HomeTemplate({ filterMovies }: Props) {

  return (
    <main className="flex flex-wrap gap-10 w-full h-[100vh] items-center justify-between  overflow-hidden overflow-y-scroll pt-5 pb-15 px-8">
      <ListMovies data={filterMovies} />
      <div className="w-full flex justify-center items-center">
        <BotonMasMovie />
      </div>
    </main>
  )
}
