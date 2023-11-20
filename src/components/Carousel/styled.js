import styled from "styled-components"

export const Slider = styled.div`
  width: ${({ width }) => width}px;
  height: 278px;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
`
export const SliderLine = styled.div`
  width: ${({ width }) => width}px;
  height: 278px;
  display: flex;
  transition: transform ease 0.2s; 
  background-color: black;
  box-shadow: 5px -23px 47px 50px #000000;
`;

export const PrevBTN = styled.span`
  position: absolute;
  left: 50px;
  top: 890px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`

export const NextBTN = styled.span`
  position: absolute;
  right: 50px;
  top: 890px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`

export const MovieImgBlock = styled.div`
  padding: 5px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`
