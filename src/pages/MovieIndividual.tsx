import { useMoviesIndividual } from "../hooks/MovieIndividual"
import { SkeletorImg } from "../components/moleculas/SkeletorImg"
import { DetailMovies } from "../components/moleculas/DetailMovies"

export function MovieIndividual() {
  const { movie, movieSeason, isFetchingMovie } = useMoviesIndividual()

  return (
    <div className="flex flex-row justify-between h-[100vh] w-full">
      {isFetchingMovie ? <SkeletorImg /> : <DetailMovies movie={movie} movieSeason={movieSeason} />}
    </div>
  )

}
