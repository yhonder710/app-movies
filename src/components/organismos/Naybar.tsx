import { Link } from "react-router-dom";
import { Logo } from "../atomos/Logo";
import { Buscador } from "../moleculas/Buscador";
import { BotonTema } from "../atomos/BotonTema";
import { BtnMenu } from "../atomos/BtnMenu";



export function Naybar() {
  return (
    <nav className="bg-[#101010] w-full h-13 flex items-center justify-between px-3 border-b-2 border-[var(--color-primary)]">
      <Link aria-label="boton de inicio" to='/'><Logo /></Link>
      <Buscador />
      <div className="flex justify-center items-center">
        <BotonTema />
        <BtnMenu />
      </div>
    </nav>
  )
}
