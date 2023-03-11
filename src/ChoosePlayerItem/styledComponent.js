import styled from 'styled-components'

export const PlayerItem = styled.li`
  text-decoration: none;
`

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
`

export const Image = styled.img`
  width: 160px;
  height: 160px;
  @media screen and (max-width: 767px) {
    height: 140px;
    width: 140px;
  }
`
