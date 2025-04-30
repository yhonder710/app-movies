import { MovieSeason } from "../../interfaces/MoviesSeason"

interface PropsSeason {
  movieSeason: MovieSeason[] | undefined
}

export function CardSeason({ movieSeason }: PropsSeason) {
  return (
    <>
      {movieSeason?.map(season => {

        return (
          <div key={season.id} className="flex flex-col text-center">
            {season.image !== null ? <img src={season.image.medium} className="w-40 h-40 border-none rounded-[15px]" alt="" /> : ''}
            {season.image !== null ? <span>{season.number}</span> : ''}
          </div>
        )
      })}

    </>
  )
}
