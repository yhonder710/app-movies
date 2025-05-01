import { useApiStore } from "../../stores/apiStore"
import { useFilterGenreStore, useFilterYearStore } from "../../stores/filterMoviesStore"
import { BtnInicio, BtnPage } from "../atomos/BtnPage"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import Imagen from '../../assets/Cotufa.png'
import Imagen1 from '../../assets/Age.png'
import Imagen2 from '../../assets/Genre.png'


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
    <aside className="h-[100vh] w-70 bg-[var(--color-secundario)] border-r-2 border-[var(--color-primary)]  flex flex-col gap-30 items-center pt-5">

      <section className="mt-2">
        <div className="cajaMovie">
          <img className="imgMovi" src={Imagen} alt="img" />
          <h1 className="text-[1.3rem] font-bold">Movie App</h1>
        </div>
        <article className="text-center h-40 flex flex-col gap-5 items-center">
          <div className="cajaFiltro">
            <CiFilter size={25} color="#00FF88" />
            <h2 className="botonFil">Filtros</h2>
          </div>
          <section className="relative flex items-center gap-2.5 justify-center">
            <img className="iconIcon" src={Imagen2} alt="img" />
            <select onChange={changeGenre} name="genre" id="genre" className="bg-[#101010] outline-none border-1 rounded-2xl text-center border-[var(--color-primary)] w-23 ">
              <option value="all">all</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
            </select>
          </section>

          <section className="flex items-center gap-2.5 justify-center">
            <img className="iconIcon" src={Imagen1} alt="age" />
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

      <section className="mt-28 p-2">
        <h2 className="text-3xl font-bold mb-5">Pagina: {page}</h2>
        <div className="flex justify-center items-center gap-3">
          <BtnPage FnPage={previoPage} arrow={<FaLongArrowAltLeft size={40} color="#00ff88" />} />
          <BtnInicio FnPage={resetNumber} />
          <BtnPage FnPage={nextPage} arrow={<FaLongArrowAltRight size={40} color="#00ff88" />} />
        </div>
      </section>
    </aside>
  )
}
