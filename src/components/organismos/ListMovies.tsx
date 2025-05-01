import { API } from "../../interfaces/movies";
import { useApiStore } from "../../stores/apiStore";
import { CartasPeliculas } from "../moleculas/CartasPeliculas";

interface Props {
  data: API[] | undefined
}

export function ListMovies({ data }: Props) {
  const { limit } = useApiStore()

  return (
    data?.slice(0, limit).map(movies => {
      return (
        <CartasPeliculas key={movies.id} id={movies.id} rate={movies.rating.average} titulo={movies.name} image={movies.image?.original} />
      )
    })
  )

}




