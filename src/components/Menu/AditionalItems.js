import * as Styled from "./styled"

export const AditionalItems = ({ isMouseEnter }) => {
  return (
    <Styled.AditionalItems ismouseenter={isMouseEnter.toString()}>
      <Styled.Item>LAUNGUAGE</Styled.Item>
      <Styled.Item>GET HELP</Styled.Item>
      <Styled.Item>EXIT</Styled.Item>
    </Styled.AditionalItems>
  )
}
