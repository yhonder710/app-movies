import { menuResponsiveStore } from "../../stores/menuResponsiveStore"
import { CiFilter } from "react-icons/ci";
import Imagen1 from '../../assets/Age.png'
import Imagen2 from '../../assets/Genre.png'
import Imagen from '../../assets/Cotufa.png'
import { useFilterGenreStore, useFilterYearStore } from "../../stores/filterMoviesStore"
import { FilterGenre } from "./FilterGenre";
import { FilterAge } from "./FilterYear";
import { BtnTemaResponsive } from "../atomos/BtnTemaResponsive";

export function MenuResponsive() {
  const changeGenre = useFilterGenreStore((state) => state.changeGenre)
  const changeYear = useFilterYearStore((state) => state.changeYear)

  const { btnMenu } = menuResponsiveStore()

  const classMenu = btnMenu ? '' : ' ml-[-100%] '

  return (
    <nav className={`${classMenu} w-screen h-[100vh] z-10 bg-[#101010] absolute md:hidden transition-all`}>
      <section className="mt-2 h-full gap-3 flex justify-center items-center flex-col">
        <div className="pb-5 gap-[8px] flex justify-center items-center">
          <img className="w-[65px] h-[65px] popcop" src={Imagen} alt="img" />
          <h3 className="text-[1.8rem] font-bold">Movie App</h3>
        </div>
        <article className="text-center h-40 flex flex-col gap-5 items-center">
          <div className="cajaFiltro">
            <CiFilter size={25} color="#00FF88" />
            <h2 className="text-[1.3rem] text-[#00FF88]">Filtros</h2>
          </div>
          <FilterGenre Imagen2={Imagen2} changeGenre={changeGenre} />
          <FilterAge Imagen1={Imagen1} changeYear={changeYear} />
        </article>
        <BtnTemaResponsive />
      </section>
    </nav>
  )
}
