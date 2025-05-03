import { Genre } from '../../interfaces/types'

interface Props {
  Imagen2: string
  changeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function FilterGenre({ Imagen2, changeGenre }: Props) {
  return (
    <section className="relative flex items-center gap-2.5 justify-center w-40">
      <img className="iconFilter" src={Imagen2} alt="img filtro genero" />
      <label htmlFor="genre" className=''>Genre</label>
      <select onChange={changeGenre} name="genre" id="genre" className="bg-[#101010] outline-none border-1 rounded-2xl text-center border-[var(--color-primary)] w-23 ">
        {Object.values(Genre).map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </section>
  )
}
