import { Movie } from "../../interfaces/moviesId";
import { MovieSeason } from "../../interfaces/MoviesSeason";
import { CardSeason } from "./CardSeason";
import { MovieDetails } from "./MovieDetails";

interface PropsDetails {
  movie: Movie | undefined
  movieSeason: MovieSeason[] | undefined
}

export function DetailMovies({ movie, movieSeason }: PropsDetails) {
  return (
    <section className="w-full h-full overflow-y-scroll relative md:pb-15 pb-50">
      <article className="w-full p-3 flex gap-5 flex-col">
        <div className="w-full items-center md:items-start flex gap-5 flex-col md:flex-row ">
          <img src={movie?.image.original} className="h-125 w-100 rounded-[20px] imgMovieSingle" alt="" />
          <span className="px-5 flex flex-col items-center md:items-start gap-2">
            <MovieDetails movie={movie} />
          </span>
        </div>


        <h4 className="text-3xl text-center font-bold text-[#11d178] tituloMovieSingle">Temporada</h4>
        <div className="flex flex-wrap gap-5 pt-5 justify-center items-center">
          <CardSeason movieSeason={movieSeason} />
        </div>
      </article>
    </section>
  )
}
