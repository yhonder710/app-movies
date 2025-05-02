import { useApiStore } from "../../stores/apiStore"

export function BotonMasMovie() {
  const { aumentarLimit, limit } = useApiStore()

  const handleClick = () => {
    if (limit < 240) {
      aumentarLimit()
    }
  }
  return (
    <button onClick={handleClick} className="border-2 border-[#00FF88] text-[20px] text-[#00FF88] btnCargarMas p-2 rounded-3xl">Cargar más</button>
  )
}
