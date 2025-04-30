import style from "../../css/boton.module.css"

interface PropsBtn {
  FnPage: () => void
  arrow: React.ReactNode
}
interface BtnInicio {
  FnPage: () => void
}

export function BtnPage({ FnPage, arrow }: PropsBtn) {
  return (
    <button onClick={FnPage} className={`${style.botonPage}`}>{arrow}</button>
  )
}

export function BtnInicio({ FnPage }: BtnInicio) {
  return (
    <button onClick={FnPage} className='flex justify-center items-center cursor-pointer text-2xl'>Inicio</button>
  )
}
