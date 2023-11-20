import * as Styled from "./styled"

export const MovieAdditionalInfo = ({ movie }) => {
  const { ReleaseYear, MpaRating, Duration } = movie

  return (
    <Styled.AditionalInfo>
      <Styled.ReleaseYear>{ReleaseYear}</Styled.ReleaseYear>
      <Styled.MpaRating>{MpaRating}</Styled.MpaRating>
      <Styled.Duration>
        {Math.round(Duration / 60)}h {Math.round(Duration % 60)}m
      </Styled.Duration>
    </Styled.AditionalInfo>
  )
}
