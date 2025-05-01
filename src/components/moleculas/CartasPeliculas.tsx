import { Link } from "react-router-dom"
import styled from "../../css/cartas.module.css"
import iconPopcon from '../../assets/popcorn 2.0.png'
import { MdStars } from "react-icons/md";
import { PiPlayCircleFill } from "react-icons/pi";




interface Props {
  id: number
  titulo: string
  image: string | undefined
  rate: number | null
}

export function CartasPeliculas({ id, titulo, image, rate }: Props) {
  return (
    <Link to={`/${id}`}>
      <article className={`${styled.cardMovie} group`}>
        <img src={image} alt="imagen de la pelicula" />
        <PiPlayCircleFill color="#00FF88" size={70} className={`${styled.iconPlayMovie} absolute top-[40%] left-[38%] opacity-0 group-hover:opacity-100 transition-opacity  brightness-80`} />
        <footer className="px-2">
          <img src={iconPopcon} alt="" />
          <strong className="text-[17px] tituloMovie">{titulo}</strong>
          <div className="flex items-center justify-center font-bold gap-1 text-[#00FF88]">
            <MdStars size={20} />
            {rate}
          </div>
        </footer>
      </article>
    </Link>
  )
}
