import { MovieSeason } from "../interfaces/MoviesSeason"
import { Movie } from "../interfaces/moviesId"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"



export const useMoviesIndividual = () => {
  const { movieId } = useParams()

  const apiSeason = async () => {
    const endpoint = `https://api.tvmaze.com/shows/${movieId}/seasons`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  }
  const apiMovieSingle = async () => {
    const endpoint = `https://api.tvmaze.com/shows/${movieId}`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  }

  const { data: movieSeason } = useQuery<MovieSeason[]>({ queryKey: ["mostrar lista de season"], queryFn: apiSeason })
  const { data: movie, isFetching: isFetchingMovie } = useQuery<Movie>({ queryKey: ["mostrar pelicula individual"], queryFn: apiMovieSingle })

  return { movie, isFetchingMovie, movieSeason }
}
