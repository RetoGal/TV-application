import { MovieAdditionalInfo } from "./MovieAdditionalInfo"
import { Buttons } from "./Buttons"
import { CLOSED_BTN_ID, VIDEO_ID } from "../../config/constants"
import { Video } from "./Video"
import * as Styled from "./styled"

export const MovieDescription = ({ movie }) => {
  const { Title, Category, Description, VideoUrl } = movie

  const play = () => {
    const closedBtn = document.getElementById(CLOSED_BTN_ID)
    const video = document.getElementById(VIDEO_ID)
    video.style.display = "block"
    closedBtn.style.display = "flex"
    video.play()
  }

  return (
    <Styled.MovieDescription>
      <Styled.DescriptionContainer>
        <Styled.CategoryName>{Category.toUpperCase()}</Styled.CategoryName>
        <Styled.MovieTitle>
          {Title.toUpperCase()}
        </Styled.MovieTitle>

        <MovieAdditionalInfo movie={movie} />
        <Styled.Description>{Description}</Styled.Description>
        <Buttons play={play} />

        <Video videoUrl={VideoUrl} />
      </Styled.DescriptionContainer>
    </Styled.MovieDescription>
  )
}
