import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const FeaturedImage = styled.div`
  width: 100%;
  height: 1060px;
  background: url(/images/${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.5s ease-in-out;
`
export const TrendingNow = styled.div`
  display: flex;
  font-size: 28px;
  justify-content: center;
  color: rgb(255, 255, 255);
  width: 22%;
  margin-bottom: 20px;
`
