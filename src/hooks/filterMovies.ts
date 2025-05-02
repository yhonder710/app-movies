import { API } from "../interfaces/movies"
import { useFilterGenreStore, useFilterNameStore, useFilterYearStore } from "../stores/filterMoviesStore"

interface PropsFilter {
  filterMovies: API[] | undefined
}

export const useFilterMovies = (data: API[] | undefined): PropsFilter => {
  const { filterGenre } = useFilterGenreStore()
  const { filterYear } = useFilterYearStore()
  const filterName = useFilterNameStore((state) => state.filterName)


  const filterMovies = (data || []).filter(movie => {
    const matchesGenre = filterGenre === 'All' ||
      movie.genres?.some(genre =>
        genre.toLowerCase() === filterGenre.toLowerCase()
      );

    const matchesYear = filterYear === 'All' ||
      movie.premiered?.slice(0, 4) === filterYear;

    const matchesName = movie.name?.toLowerCase().includes(filterName.toLowerCase());

    return matchesGenre && matchesYear && matchesName;
  });


  return {
    filterMovies
  }
}
