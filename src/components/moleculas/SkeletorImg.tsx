export function SkeletorImg() {
  return (
    <div className="flex flex-row justify-between h-[100vh] w-full">
      <section className="w-full h-full overflow-y-scroll relative md:pb-15 pb-50">
        <article className="w-full p-3 flex gap-5 flex-col">
          <div className="w-full items-center md:items-start flex gap-5 flex-col md:flex-row ">
            <span className="h-125 w-100 rounded-[20px] bg-[#101010]"></span>
            <span className="px-5 flex items-center flex-col gap-2">
              <div className="h-18 w-150 rounded-2xl bg-[#101010]"></div>
              <span className="flex gap-5 text-[18px]">
                <div className="h-8 w-30 rounded-2xl bg-[#101010]"></div>
                <div className="h-8 w-30 rounded-2xl bg-[#101010]"></div>
                <div className="h-8 w-30 rounded-2xl bg-[#101010]"></div>
              </span>
              <strong className="flex items-center gap-3 text-[20px]">
                Calificacion
                <div className="h-8 w-20 rounded-2xl bg-[#101010]"></div>
              </strong>
              <div className="h-75 w-150 md:w-200 rounded-2xl bg-[#101010]"></div>
            </span>
          </div>

          <h4 className="pl-10 text-3xl text-center font-bold">Temporada</h4>
          <div className="flex flex-wrap gap-5 pt-5 justify-center items-center pb-18">
            <div className="h-35 w-35 rounded-2xl bg-[#101010]"></div>
            <div className="h-35 w-35 rounded-2xl bg-[#101010]"></div>
            <div className="h-35 w-35 rounded-2xl bg-[#101010]"></div>
          </div>
        </article>
      </section>
    </div>
  )
}
