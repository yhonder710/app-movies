import { useEffect, useState } from "react"
import { MovieSeason } from "../interfaces/MoviesSeason"
import { Movie } from "../interfaces/moviesId"
import { useParams } from "react-router-dom"

export const useMoviesIndividual = () => {
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

  return { movie, movieSeason }
}
