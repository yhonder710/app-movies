import { useEffect, useState } from "react"
import { Movie } from "../../interfaces/moviesId"
import { useParams } from "react-router-dom"
import { MovieDetails } from "../moleculas/MovieDetails"
import { MovieSeason } from "../../interfaces/MoviesSeason"
import { CardSeason } from "../moleculas/CardSeason"


export function MovieIndividual() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie>()
  const [movieSeason, setMovieSeason] = useState<MovieSeason[]>()

  useEffect(() => {
    const fetchMoviesId = async () => {
      const endpoint = `https://api.tvmaze.com/shows/${movieId}`
      const response = await fetch(endpoint)
      const data = await response.json()
      setMovie(data)
    }

    const fetchMoviesSeason = async () => {
      const endpoint = `https://api.tvmaze.com/shows/${movieId}/seasons`
      const response = await fetch(endpoint)
      const data = await response.json()
      setMovieSeason(data)
    }

    fetchMoviesId()
    fetchMoviesSeason()
  }, [movieId])


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
