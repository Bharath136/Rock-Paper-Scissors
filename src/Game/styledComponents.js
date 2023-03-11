import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const GameContainer = styled.div`
  padding: 40px 200px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const ScoreCardContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 0;
`

export const ScoreContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 140px;
`

export const ScoreTitle = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 24px;
  margin: 0;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 48px;
  margin: 0;
`

export const ChoosePlayerListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const ChoosePlayerList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 40%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const PopupButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const PopupButton = styled.button`
  background-color: #fff;
  color: #223a5f;
  font-family: 'Bree Serif';
  border: 0;
  outline: none;
  cursor: pointer;
  height: 34px;
  width: 100px;
  border-radius: 4px;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
`
export const PopupBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

export const PopupDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #223a5f;
  margin: 20px 40px;
  padding: 30px;
`

export const PopupHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 48px;
  font-weight: 500;
  color: #fff;
  margin: 0;
`

export const PopupImage = styled.img`
  width: 500px;
  height: 440px;
`
