import { MovieSeason } from "../../interfaces/MoviesSeason"

interface PropsSeason {
  movieSeason: MovieSeason[] | undefined
}

export function CardSeason({ movieSeason }: PropsSeason) {
  return (
    <>
      {movieSeason?.map(season => {

        return (
          <div key={season.id} className="flex flex-col text-center bg-[#101010] border-2 border-[#11d178] rounded-2xl overflow-hidden imgMovieSeason ">
            {season.image !== null ? <img src={season.image.medium} className="w-40 h-40 border-b-2 border-[#11d178]" alt="" /> : ''}
            {season.image !== null ? <span className="text-[18px] font-bold py-1 text-[#11d178]">T{season.number}</span> : ''}
          </div>
        )
      })}

    </>
  )
}
