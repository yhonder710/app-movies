import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/organismos/Layout"
import { Home } from "../pages/Home"
import { MovieIndividual } from "../pages/MovieIndividual"

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":movieId" element={<MovieIndividual />} />
      </Route>
    </Routes>
  )
}
