import { Link } from "react-router-dom";
import { Logo } from "../atomos/Logo";
import { Buscador } from "../moleculas/Buscador";
import { BotonTema } from "../atomos/BotonTema";

export function Naybar() {
  return (
    <nav className="bg-[#101010] w-full h-13 flex items-center justify-between px-3 border-b-2 border-[var(--color-primary)]">
      <Link to='/'><Logo /></Link>
      <Buscador />
      <BotonTema />

    </nav>
  )
}
