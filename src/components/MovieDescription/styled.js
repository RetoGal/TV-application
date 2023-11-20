import styled from "styled-components"

export const MovieDescription = styled.div`
  display: flex;
  align-items: normal;
  background: ${({ featuredimage }) => `url(/images/${featuredimage})`};
  width: 100%;
  height: 724px;
  background-position-x: left;
  background-size: cover;
  background-repeat: no-repeat;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 87%;
  margin: 0px auto;
  min-height: 855px;
`

export const CategoryName = styled.div`
  font-family: Tajawal;
  font-size: 24px;
  color: #858688;
  letter-spacing: 3.5px;
`

export const MovieTitle = styled.h1`
  font-size: 76px;
  color: #fff;
  margin: 0;
`

export const AditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 20px;
  max-width: 190px;
  justify-content: space-between;
`

export const Description = styled.div`
  color: #f1f1f1;
  font-famaly: Tajawal;
  height: 150px;
  width: 500px;
  font-size: 24px;
  margin-top: 20px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`

export const PlayBTN = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #0c0c0c;
  font-weight: bold;
  width: 150px;
  height: 50px;
  border-radius: 23px;
  background-color: #f1f1f1;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const MoreInfoBTN = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  width: 150px;
  height: 50px;
  border-radius: 23px;
  cursor: pointer;
  background: transparent linear-gradient(128deg, #2727f5 0%, #001671 100%) 0%
    0% no-repeat padding-box;

  &:hover {
    opacity: 0.7;
  }
`

export const Video = styled.video`
  width: 700px;
  position: absolute;
  display: none;
  left: 610px;
  top: 150px;
`

export const ClosedVideo = styled.span`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  border-radius: 100%;
  heigth: 40px;
  left: 1300px;
  top: 104px;
  background: transparent linear-gradient(128deg, #2727f5 0%, #001671 100%) 0%;
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`

export const FeaturedImage = styled.div`
  width: 100%;
  height: 1000px;
  background: url(/images/${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: background 1s ease-in-out;
`

export const UserImg = styled.div`
  display: flex;
  align-self: center;
`

export const ReleaseYear = styled.span``
export const MpaRating = styled.span``
export const Duration = styled.span``
