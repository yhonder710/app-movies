import { useApiStore } from "../../stores/apiStore"
import { useFilterGenreStore, useFilterYearStore } from "../../stores/filterMoviesStore"
import { BtnInicio, BtnPage } from "../atomos/BtnPage"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



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
    <aside className="h-[100vh] w-80 bg-neutral-900 border-r-1 border-[var(--color-primary)]  flex flex-col gap-30 items-center pt-5">

      <section>
        <h2 className="text-3xl font-bold mb-2">Filtros</h2>
        <article className="text-center h-40 flex flex-col gap-5">
          <section>
            <h3 className="text-2xl">Genero</h3>
            <select onChange={changeGenre} name="genre" id="genre" className="bg-blue-900 border-1 rounded-2xl text-center border-white w-20">
              <option value="all">all</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
            </select>
          </section>

          <section>
            <h3 className="text-2xl">Año</h3>
            <select onChange={changeYear} name="year" id="year" className="bg-blue-900 border-1 rounded-2xl text-center border-white w-20">
              <option value="all">all</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2012">2012</option>
            </select>
          </section>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-5">Pagina: {page}</h2>
        <div className="flex justify-center items-center gap-1">
          <BtnPage FnPage={previoPage} arrow={<FaLongArrowAltLeft size={40} />} />
          <BtnInicio FnPage={resetNumber} />
          <BtnPage FnPage={nextPage} arrow={<FaLongArrowAltRight size={40} />} />
        </div>
      </section>
    </aside>
  )
}
