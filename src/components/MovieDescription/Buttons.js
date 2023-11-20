import * as Styled from "./styled"

export const Buttons = ({play}) => {
  return (
    <Styled.ButtonsContainer>
      <Styled.PlayBTN onClick={play}> PLAY</Styled.PlayBTN>
      <Styled.MoreInfoBTN>MORE INFO</Styled.MoreInfoBTN>
    </Styled.ButtonsContainer>
  )
}
