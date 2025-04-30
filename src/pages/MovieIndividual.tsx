import { MovieDetails } from "../components/moleculas/MovieDetails"
import { CardSeason } from "../components/moleculas/CardSeason"
import { useMoviesIndividual } from "../hooks/MovieIndividual"

export function MovieIndividual() {
  const { movie, movieSeason } = useMoviesIndividual()

  return (
    <div className="flex flex-row justify-between h-[100vh] w-full">
      <section className="w-full h-full overflow-y-scroll relative pb-15">
        <article className="h-full w-full p-3 flex flex-col">
          <div className="h-full w-full p-3 flex ">
            <img src={movie?.image.original} className="h-125 w-100 rounded-[20px]" alt="" />
            <span className="px-5 flex flex-col gap-2">
              <MovieDetails movie={movie} />
            </span>
          </div>

          <h4 className="pl-10 text-3xl text-center font-bold">Temporada</h4>
          <div className="flex flex-wrap gap-5 pt-5 justify-center items-center pb-18">
            <CardSeason movieSeason={movieSeason} />
          </div>
        </article>
      </section>
    </div>
  )

}
