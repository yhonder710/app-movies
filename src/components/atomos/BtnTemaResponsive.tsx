import { useState } from "react";
import style from '../../css/boton.module.css'

import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";



export function BtnTemaResponsive() {
  const [botonTema, setBotonTema] = useState<boolean>(false)

  const handleBtnTema = () => {
    setBotonTema(!botonTema)
  }

  return (
    <button className={`${style} w-[40px] h-[40px] border-2 border-[var(--color-primary)] flex justify-center items-center rounded-4xl cursor-pointer`} onClick={handleBtnTema}>
      {botonTema ?
        <FaMoon size={28} color="#00FF88" className={style.btnModoOscuro} />
        : <IoSunny size={28} color="#00FF88" className={style.btnModoClaro} />}
    </button>
  )
}
