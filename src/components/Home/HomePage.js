import { useState } from "react"
import MoviesData from "../../data/MoviesData.json"
import { Menu } from "../Menu/Manu"
import { MovieDescription } from "../MovieDescription/MovieDescription"
import { Carousel } from "../Carousel/Carousel"
import * as Styled from "./styled"

export const HomePage = () => {
  const { Featured, TendingNow } = MoviesData
  MoviesData.TendingNow.sort((a, b) => new Date(b.Date) - new Date(a.Date))
 const movieId = JSON.parse(localStorage.getItem("movieId"))

  const featuredMovie = TendingNow.find(
    (movie) => parseInt(movie.Id) === parseInt(movieId)
  )

  const [movie, setMovie] = useState(featuredMovie || Featured)

  return (
    <Styled.FeaturedImage background={movie.FeaturedImage}>
      <Styled.Container>
        <Menu />

        <MovieDescription movie={movie} />
      </Styled.Container>
      <Styled.TrendingNow style={{
          color: "#fff"
        }}>Trending Now</Styled.TrendingNow>
      <Carousel
        setMovie={setMovie}
        MoviesData={MoviesData}
      />
    </Styled.FeaturedImage>
  )
}
