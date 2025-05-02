
interface Props {
  Imagen1: string
  changeYear: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function FilterAge({ Imagen1, changeYear }: Props) {
  const years = {} as Record<string, number>;
  for (let year = 2000; year <= 2025; year++) {
    years[`Y${year}`] = year;
  }

  return (
    <section className="flex items-center gap-2.5 justify-center">
      <img className="iconFilter" src={Imagen1} alt="age" />
      <select onChange={changeYear} name="year" id="year" className="bg-[#101010] outline-none border-1 rounded-2xl text-center border-[var(--color-primary)] w-23">
        <option value="All">All</option>
        {Object.values(years).map(years => (
          <option key={years} value={years}>
            {years}
          </option>
        ))}
      </select>
    </section>
  )
}
