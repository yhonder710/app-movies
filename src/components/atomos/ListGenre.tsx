interface PropsGenre {
  genre: string
}

export function ListGenre({ genre }: PropsGenre) {
  return (
    <>
      <strong>{genre}</strong>
    </>
  )
}
