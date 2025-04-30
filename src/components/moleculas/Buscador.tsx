import { useFilterNameStore } from "../../stores/filterMoviesStore"

export function Buscador() {
  const changeName = useFilterNameStore((state) => state.changeName)

  return (
    <>
      <div className='flex justify-center items-center gap-3'>
        <input onChange={changeName} className="border-1 border-white rounded-[8px] w-60 outline-none p-1 pl-2" type="text" />
      </div>
    </>
  )
}
