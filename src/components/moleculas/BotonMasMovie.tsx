import { useApiStore } from "../../stores/apiStore"

export function BotonMasMovie() {
  const { aumentarLimit, limit } = useApiStore()

  const handleClick = () => {
    if (limit < 240) {
      aumentarLimit()
    }
  }
  return (
    <button onClick={handleClick} className="bg-indigo-600 cursor-pointer">Cargar más</button>
  )
}
