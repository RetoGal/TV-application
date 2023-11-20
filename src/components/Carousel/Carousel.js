import "@fortawesome/fontawesome-free/css/all.css"
import { useEffect, useRef, useState } from "react"
import {
  COVER_IMG_ABS_WIDTH,
  COVER_IMG_HEIGH,
  COVER_IMG_WIDTH,
  SLIDER_CONTAINER_WIDTH,
  SLIDER_POSITION_LEFT,
} from "../../config/constants"
import * as Styled from "./styled"

export const Carousel = ({ MoviesData, setMovie }) => {
  const { TendingNow } = MoviesData
  const nextRef = useRef()
  const prevRef = useRef()
  const sliderLineRef = useRef()
  const [offset, setOffset] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    sliderLineRef.current.style.transform = `translateX(-${offset}px)`
  }, [offset])

  const toTheNextMovie = () => {
    const left = SLIDER_POSITION_LEFT(TendingNow.length)

    if (offset >= left) {
      setOffset(0)
    } else {
      setOffset(offset + COVER_IMG_ABS_WIDTH)
    }
  }

  const toThePrevMovie = () => {
    const left = SLIDER_POSITION_LEFT(TendingNow.length)
    if (offset <= 0) {
      setOffset(left)
    } else {
      setOffset(offset - COVER_IMG_ABS_WIDTH)
    }
  }

  const movieSelection = (movie) => {
    localStorage.setItem("movieId", JSON.stringify(movie.Id))
    setMovie(movie)
  }

  const onWheel = (e) => {
    const deltaX = e.deltaX

    if (deltaX !== 0) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (deltaX > 0 && offset < SLIDER_POSITION_LEFT(TendingNow.length)) {
          setOffset(
            (prevOffset) => prevOffset + Math.min(deltaX, COVER_IMG_ABS_WIDTH)
          )
        } else if (deltaX < 0 && offset > 0) {
          setOffset(
            (prevOffset) =>
              prevOffset - Math.min(Math.abs(deltaX), COVER_IMG_ABS_WIDTH)
          )
        }
      })
    }
  }

  return (
    <>
      <Styled.Slider width={SLIDER_CONTAINER_WIDTH}>
        <Styled.SliderLine
          onWheel={onWheel}
          width={SLIDER_POSITION_LEFT(TendingNow.length)}
          ref={sliderLineRef}
        >
          {TendingNow.map((movie, index) => {
            return (
              <Styled.MovieImgBlock
                key={index}
                onClick={() => movieSelection(movie)}
              >
                <img
                  style={{
                    width: `${COVER_IMG_WIDTH}px`,
                    height: `${COVER_IMG_HEIGH}px`,
                  }}
                  key={index}
                  src={`/images/${movie.CoverImage}`}
                  alt={movie.Title}
                />
              </Styled.MovieImgBlock>
            )
          })}
        </Styled.SliderLine>
        <Styled.PrevBTN
          onClick={toThePrevMovie}
          ref={prevRef}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Styled.PrevBTN>
        <Styled.NextBTN
          onClick={toTheNextMovie}
          ref={nextRef}
        >
          {" "}
          <i className="fa-solid fa-arrow-right"></i>{" "}
        </Styled.NextBTN>
      </Styled.Slider>
    </>
  )
}
