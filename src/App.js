// import {Component} from 'react'
// import {RiCloseLine} from 'react-icons/ri'
// import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'

// import ChoosePlayerItem from './ChoosePlayerItem'

// import ResultView from './ResultView'

// import {
//   AppContainer,
//   GameContainer,
//   ScoreCardContainer,
//   NameContainer,
//   Heading,
//   ScoreContainer,
//   ScoreTitle,
//   Score,
//   ChoosePlayerListContainer,
//   ChoosePlayerList,
//   PopupButtonContainer,
//   PopupButton,
//   PopupBoxContainer,
//   PopupDetailsContainer,
//   PopupHeading,
//   CloseButtonContainer,
//   CloseButton,
//   PopupImage,
//   PlayerItem,
//   Button,
//   Image,
// } from './styledComponent'

import Game from './Game'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => <Game />

export default App
