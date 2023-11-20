export const MENU_DATA = [
  {
    src: "icons/search.png",
    title: "Search",
  },
  {
    src: "icons/home.png",
    title: "Home",
  },

  {
    src: "icons/movie.png",
    title: "Movie",
  },
  {
    src: "icons/genres.png",
    title: "Genres",
  },
  {
    src: "icons/tvShow.png",
    title: "TV Show",
  },
  {
    src: "icons/watchLater.png",
    title: "Watch Later",
  },
]

const numberOfMoviesShowing = 8
const padding = 10

export const CLOSED_BTN_ID = `Closed ${Math.floor(Math.round() * 1000)}`

export const VIDEO_ID = `Video ${Math.floor(Math.round() * 1000)}`

export const MENU_ITEM_TITLE = "menuItemName"

export const COVER_IMG_WIDTH = 200

export const COVER_IMG_ABS_WIDTH = COVER_IMG_WIDTH + padding

export const COVER_IMG_HEIGH = 278

export const SLIDER_CONTAINER_WIDTH =
  numberOfMoviesShowing * (padding + COVER_IMG_WIDTH)

export const SLIDER_WIDTH =
  numberOfMoviesShowing * COVER_IMG_WIDTH + padding * numberOfMoviesShowing

export const SLIDER_POSITION_LEFT = (filmsCount) =>
  (filmsCount - numberOfMoviesShowing) * (padding + COVER_IMG_WIDTH)
