import { useState } from "react"
import { MENU_DATA } from "../../config/constants"
import { MenuItems } from "./MenuItems"
import { AditionalItems } from "./AditionalItems"
import * as Styled from "./styled"

export const Menu = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false)

  const onMouseEnter = () => {
    setIsMouseEnter(true)
  }

  const onMouseLeave = () => {
    setIsMouseEnter(false)
  }

  return (
    <Styled.Menu ismouseenter={isMouseEnter.toString()}>
      <Styled.User ismouseenter={isMouseEnter.toString()}>
        <Styled.UserImg>
          <img
            src="/users/user.jpg"
            alt="user"
            style={{
              borderRadius: "100%",
            }}
          />
        </Styled.UserImg>
        <Styled.UserName>Daniel</Styled.UserName>
      </Styled.User>
      <Styled.Wrapper
        ismouseenter={isMouseEnter.toString()}
        onMouseLeave={onMouseLeave}
      >
        <MenuItems
          onMouseEnter={onMouseEnter}
          isMouseEnter={isMouseEnter}
          MENU_DATA={MENU_DATA}
        />
      </Styled.Wrapper>

      <AditionalItems isMouseEnter={isMouseEnter} />
    </Styled.Menu>
  )
}
