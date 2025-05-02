import { useApiStore } from "../../stores/apiStore"
import { useFilterGenreStore, useFilterYearStore } from "../../stores/filterMoviesStore"
import { BtnInicio, BtnPage } from "../atomos/BtnPage"

import { CiFilter } from "react-icons/ci";
import Imagen from '../../assets/Cotufa.png'
import Imagen1 from '../../assets/Age.png'
import Imagen2 from '../../assets/Genre.png'

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FilterGenre } from "../moleculas/FilterGenre";
import { FilterAge } from "../moleculas/FilterYear";




export function Sidebar() {
  const changeGenre = useFilterGenreStore((state) => state.changeGenre)
  const changeYear = useFilterYearStore((state) => state.changeYear)
  const { nextNumber, previosNumber, numberPage, page, resetNumber } = useApiStore()

  const previoPage = () => {
    if (numberPage > 0) {
      previosNumber()
    }
  }

  const nextPage = () => {
    if (numberPage < 330) {
      nextNumber()
    }
  }

  return (
    <aside className="h-[100vh] w-70 bg-[var(--color-secundario)] border-r-2 border-[var(--color-primary)]  flex-col gap-30 items-center pt-5 relative md:flex hidden">
      <section className="mt-2">
        <div className="pb-5 gap-[8px] flex justify-center items-center">
          <img className="w-[45px] h-[45px] popcop" src={Imagen} alt="img" />
          <h1 className="text-[1.3rem] font-bold">Movie App</h1>
        </div>
        <article className="text-center h-40 flex flex-col gap-5 items-center">
          <div className="cajaFiltro">
            <CiFilter size={25} color="#00FF88" />
            <h2 className="text-[1.3rem] text-[#00FF88]">Filtros</h2>
          </div>
          <FilterGenre Imagen2={Imagen2} changeGenre={changeGenre} />
          <FilterAge Imagen1={Imagen1} changeYear={changeYear} />
        </article>
      </section>

      <section className="border-t-2 border-[#00FF88] w-full absolute bottom-15">
        <div className="flex justify-center items-center gap-5 pt-5">
          <BtnPage FnPage={previoPage} arrow={<IoIosArrowRoundBack size={40} color="#00ff88" />} />
          <BtnInicio FnPage={resetNumber} page={page} />
          <BtnPage FnPage={nextPage} arrow={<IoIosArrowRoundForward size={40} color="#00ff88" />} />
        </div>
      </section>
    </aside>
  )
}
