import { useRef } from "react"
import { CLOSED_BTN_ID, VIDEO_ID } from "../../config/constants"
import * as Styled from "./styled"

export const Video = ({ videoUrl }) => {
  const videoRef = useRef()
  const closedRef = useRef()

  const closedVideo = () => {
    videoRef.current.style.display = "none"
    closedRef.current.style.display = "none"
    videoRef.current.pause()
  }
  return (
    <>
      <Styled.Video
        ref={videoRef}
        id={VIDEO_ID}
        src={videoUrl}
      />

      <Styled.ClosedVideo
        ref={closedRef}
        id={CLOSED_BTN_ID}
        onClick={closedVideo}
      >
        X
      </Styled.ClosedVideo>
    </>
  )
}
