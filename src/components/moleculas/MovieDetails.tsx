import { Movie } from "../../interfaces/moviesId";
import { ListGenre } from "../atomos/ListGenre"
import { FaStar } from "react-icons/fa";

interface PropsDetails {
  movie: Movie | undefined
}

export function MovieDetails({ movie }: PropsDetails) {
  return (
    <>
      <h3 className="text-6xl">{movie?.name}</h3>
      <span className="flex gap-5 text-[18px]">{movie?.genres.map(genre => { return (<ListGenre key={genre} genre={genre} />) })}</span>
      <strong className="flex items-center gap-2 text-[20px]">Calificacion <FaStar color="yellow" /> {movie?.rating.average}</strong>
      <p className="text-[16px]">{movie?.summary.slice(3)}</p>
    </>
  )
}
