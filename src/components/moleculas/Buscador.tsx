import { useFilterNameStore } from "../../stores/filterMoviesStore"
import style from '../../css/img.module.css'

import { IoSearch } from "react-icons/io5";


export function Buscador() {
  const changeName = useFilterNameStore((state) => state.changeName)

  return (
    <>
      <div className='flex justify-center items-center gap-3 relative'>
        <IoSearch size={22} className={`${style.iconSeach} absolute left-2.5`} />
        <input onChange={changeName} type="text" className="border-1 border-[var(--color-primary)] rounded-3xl w-80 outline-none p-1 placeholder:text-[#00FF88] placeholder:opacity-65 placeholder:text-center" placeholder="Busca tu pelicula deseada" />
      </div>
    </>
  )
}
