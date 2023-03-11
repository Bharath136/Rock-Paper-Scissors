import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ResultView from '../ResultView'
import ChoosePlayerItem from '../ChoosePlayerItem'

import {
  AppContainer,
  GameContainer,
  ScoreCardContainer,
  NameContainer,
  Heading,
  ScoreContainer,
  ScoreTitle,
  Score,
  ChoosePlayerListContainer,
  ChoosePlayerList,
  PopupButtonContainer,
  PopupButton,
  PopupBoxContainer,
  PopupDetailsContainer,
  CloseButtonContainer,
  CloseButton,
  PopupImage,
} from './styledComponents'

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

class Game extends Component {
  state = {
    score: 0,
    initialChoicesList: choicesList,
    userChoiceImgUrl: '',
    computerChoiceImgUrl: '',
    showResult: false,
    status: '',
  }

  userSelectedItem = id => {
    const randomNumber = Math.floor(Math.random() * 3)
    const userSelectedItem = choicesList.filter(eachItem => id === eachItem.id)
    const computerSelectedItem = choicesList[randomNumber]

    if (
      (id === choicesList[0].id && randomNumber === 1) ||
      (id === choicesList[1].id && randomNumber === 2) ||
      (id === choicesList[2].id && randomNumber === 0)
    ) {
      this.setState(preState => ({
        score: preState.score + 1,
        status: 'YOU WON',
      }))
    } else if (id !== computerSelectedItem.id) {
      this.setState(preState => ({
        score: preState.score - 1,
        status: 'YOU LOSE',
      }))
    } else {
      this.setState({status: 'IT IS DRAW'})
    }
    this.setState({
      userChoiceImgUrl: userSelectedItem[0].imageUrl,
      computerChoiceImgUrl: computerSelectedItem.imageUrl,
      showResult: true,
    })
  }

  onPlayAgain = () => {
    this.setState({
      initialChoicesList: choicesList,
      userChoiceImgUrl: '',
      computerChoiceImgUrl: '',
      showResult: false,
      status: '',
    })
  }

  renderPopup = () => (
    <Popup trigger={<PopupButton> RULES</PopupButton>} modal nested>
      {close => (
        <PopupBoxContainer className="modal">
          <CloseButtonContainer>
            <CloseButton onClick={() => close()}>
              <RiCloseLine className="close-icon" />
            </CloseButton>
          </CloseButtonContainer>
          <PopupDetailsContainer className="content">
            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupDetailsContainer>
        </PopupBoxContainer>
      )}
    </Popup>
  )

  render() {
    const {
      initialChoicesList,
      score,
      showResult,
      userChoiceImgUrl,
      computerChoiceImgUrl,
      status,
    } = this.state

    return (
      <AppContainer>
        <GameContainer>
          <ScoreCardContainer>
            <NameContainer>
              <Heading>
                ROCK <br /> PAPER <br /> SCISSORS
              </Heading>
            </NameContainer>
            <ScoreContainer>
              <ScoreTitle>Score</ScoreTitle>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreCardContainer>
          {showResult ? (
            <ResultView
              score={score}
              userChoiceImgUrl={userChoiceImgUrl}
              computerChoiceImgUrl={computerChoiceImgUrl}
              status={status}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            <ChoosePlayerListContainer>
              <ChoosePlayerList>
                {initialChoicesList.map(eachItem => (
                  <ChoosePlayerItem
                    key={eachItem.id}
                    eachItem={eachItem}
                    userSelectedItem={this.userSelectedItem}
                  />
                ))}
              </ChoosePlayerList>
            </ChoosePlayerListContainer>
          )}
        </GameContainer>
        <PopupButtonContainer>{this.renderPopup()}</PopupButtonContainer>
      </AppContainer>
    )
  }
}

export default Game
