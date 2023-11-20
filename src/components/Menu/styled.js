import styled from "styled-components"

export const Menu = styled.div`
  width: ${({ ismouseenter }) => (ismouseenter === "true" ? "1150px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  min-height: 1060px;
  padding-left: 10px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.94),
    rgba(0, 0, 0, 0.92),
    rgba(0, 0, 0, 0.81),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, -0.2)
  );

  transition: width 1s;
`

export const MenuItem = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ ismouseenter }) =>
    ismouseenter === "true" ? "pointer" : "auto"};
  margin-bottom: 5px;
  width: ${({ ismouseenter }) => (ismouseenter === "true" ? "280px" : "none")};
  &:hover {
    ${({ ismouseenter }) =>
      ismouseenter === "true"
        ? `background-color: #3b486d;
    border-radius: 10px;
    transition: background-color 0.7s, border-radius 0.7s;`
        : "none"}
  }
`

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  background-color: ${({ isactive }) => isactive === "true" && "#3B486D"};
  border-radius: ${({ isactive }) => isactive === "true" && "50%"};
`
export const Title = styled.span`
  font-size: 28px;
  color: #fff;
  margin-left: 20px;
  display: ${({ ismouseenter }) =>
    ismouseenter === "true" ? "block" : "none"};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0px 0px 70px 0px;
  width: ${({ ismouseenter }) => (ismouseenter === "true" ? "200px" : "none")};
`

export const AditionalItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  padding: 25px;
  visibility: ${({ ismouseenter }) =>
    ismouseenter === "true" ? "visible" : "hidden"};
  opacity: ${({ ismouseenter }) => (ismouseenter === "true" ? 1 : 0)};
  transition: opacity 0.7s ease-in-out, visibility 1s ease-in-out;
`

export const Item = styled.span`
  color: #858688;
  font-size: 24px;
`

export const User = styled.div`
  display: flex;
  color: #f1f1f1;
  font-size: 28px;
  width: 190px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  visibility: ${({ ismouseenter }) =>
    ismouseenter === "true" ? "visible" : "hidden"};
  opacity: ${({ ismouseenter }) => (ismouseenter === "true" ? 1 : 0)};
  transition: opacity 0.7s ease-in-out, visibility 1s ease-in-out;
`

export const UserImg = styled.div`
  display: flex;
  align-self: center;
`

export const UserName = styled.div``
