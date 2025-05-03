import { useState } from "react";
import style from '../../css/boton.module.css'

import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";



export function BotonTema() {
  const [botonTema, setBotonTema] = useState<boolean>(false)

  const handleBtnTema = () => {
    setBotonTema(!botonTema)
  }

  return (
    <button aria-label="modo oscuro" type="button" className={`${style} w-[40px] h-[40px] border-2 border-[var(--color-primary)]  justify-center items-center rounded-4xl cursor-pointer hidden md:flex`} onClick={handleBtnTema}>
      {botonTema ?
        <FaMoon size={28} color="#00FF88" className={style.btnModoOscuro} />
        : <IoSunny size={28} color="#00FF88" className={style.btnModoClaro} />}
    </button>
  )
}
