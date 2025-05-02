import { useApiStore } from "../../stores/apiStore"
import { useFilterGenreStore, useFilterYearStore } from "../../stores/filterMoviesStore"
import { BtnInicio, BtnPage } from "../atomos/BtnPage"

import { CiFilter } from "react-icons/ci";
import Imagen from '../../assets/Cotufa.png'
import Imagen1 from '../../assets/Age.png'
import Imagen2 from '../../assets/Genre.png'

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";



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
    <aside className="h-[100vh] w-70 bg-[var(--color-secundario)] border-r-2 border-[var(--color-primary)]  flex flex-col gap-30 items-center pt-5 relative">

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
          <section className="relative flex items-center gap-2.5 justify-center">
            <img className="iconFilter" src={Imagen2} alt="img" />
            <select onChange={changeGenre} name="genre" id="genre" className="bg-[#101010] outline-none border-1 rounded-2xl text-center border-[var(--color-primary)] w-23 ">
              <option value="all">all</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
            </select>
          </section>

          <section className="flex items-center gap-2.5 justify-center">
            <img className="iconFilter" src={Imagen1} alt="age" />
            <select onChange={changeYear} name="year" id="year" className="bg-[#101010] outline-none border-1 rounded-2xl text-center border-[var(--color-primary)] w-23">
              <option value="all">all</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2012">2012</option>
            </select>
          </section>
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
