import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TeamsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
  margin-top: 60px;
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`

export const TeamDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Team = styled.h1`
  color: #fff;
  font-size: 22px;
  font-family: 'Roboto';
`

export const TeamImage = styled.img`
  width: 160px;
  height: 160px;
`

export const Status = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  color: #fff;
  font-weight: 600;
`

export const PlayAgainButton = styled.button`
  outline: none;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  height: 38px;
  width: 160px;
  font-family: 'Bree Serif';
  font-size: 14px;
  color: #223a5f;
`
