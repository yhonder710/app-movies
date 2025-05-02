import style from "../../css/boton.module.css"

interface PropsBtn {
  FnPage: () => void
  arrow: React.ReactNode
}
interface BtnInicio {
  FnPage: () => void
  page: number
}

export function BtnPage({ FnPage, arrow }: PropsBtn) {
  return (
    <button onClick={FnPage} className={`${style.botonPage}`}>{arrow}</button>
  )
}

export function BtnInicio({ FnPage, page }: BtnInicio) {
  return (
    <button onClick={FnPage} className={`${style.btnPageHome} flex justify-center items-center cursor-pointer text-2xl text-[#00FF88] border-1 border-[#00FF88] w-10 h-10 rounded-[10px]`}>{page}</button>
  )
}
