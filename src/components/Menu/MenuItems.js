import { useState } from "react"
import { MENU_ITEM_TITLE } from "../../config/constants"
import * as Styled from "./styled"

export const MenuItems = ({ MENU_DATA, isMouseEnter, onMouseEnter }) => {
  const [isActive, setIsActive] = useState("Home")

  const onClick = (title) => setIsActive(title)

  return (
    <>
      {MENU_DATA.map((element, i) => (
        <Styled.MenuItem
          ismouseenter={isMouseEnter ? "true" : "false"}
          onClick={() => onClick(element.title)}
          key={i}
        >
          <Styled.Icon
            isactive={isActive === element.title ? "true" : "false"}
            key={i}
            onMouseEnter={onMouseEnter}
          >
            <img
              key={i}
              src={element.src}
              alt={element.title}
            />
          </Styled.Icon>

          <Styled.Title
            ismouseenter={isMouseEnter ? "true" : "false"}
            className={MENU_ITEM_TITLE}
          >
            {element.title}
          </Styled.Title>
        </Styled.MenuItem>
      ))}
    </>
  )
}
