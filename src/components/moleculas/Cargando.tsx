import { SyncLoader } from "react-spinners"

export function Cargando() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <SyncLoader />
      </div>
    </>
  )
}
