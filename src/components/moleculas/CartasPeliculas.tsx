import { Link } from "react-router-dom"
import styled from "../../css/cartas.module.css"

interface Props {
  id: number
  titulo: string
  image: string | undefined
  idioma: string
}

export function CartasPeliculas({ id, titulo, image, idioma }: Props) {
  return (
    <Link to={`/${id}`}>
      <article style={{ backgroundImage: `url(${image})` }} className={`${styled.cardMovie}`}>
        <header className="tituloMovie">{titulo}</header>
        <footer>{idioma}</footer>
      </article>
    </Link>
  )
}
