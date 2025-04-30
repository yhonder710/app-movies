import { WiMoonAltFirstQuarter } from "react-icons/wi";
import style from '../../css/boton.module.css'
import { useState } from "react";


export function BotonTema() {
  const [botonTema, setBotonTema] = useState<boolean>(false)


  const classBtnTema = botonTema ? style.botonTemaOn : style.botonTema
  return (
    <button className={classBtnTema} onClick={() => setBotonTema(!botonTema)}>
      <WiMoonAltFirstQuarter size={40} />
    </button>
  )
}
