import {
  ResultContainer,
  TeamsContainer,
  Status,
  PlayAgainButton,
  TeamDetailContainer,
  Team,
  TeamImage,
} from './styledComponents'

const ResultView = props => {
  const {status, onPlayAgain, userChoiceImgUrl, computerChoiceImgUrl} = props
  const onClickPlayAgain = () => {
    onPlayAgain()
  }
  return (
    <ResultContainer>
      <TeamsContainer>
        <TeamDetailContainer>
          <Team>YOU</Team>
          <TeamImage src={userChoiceImgUrl} alt="your choice" />
        </TeamDetailContainer>
        <TeamDetailContainer>
          <Team>OPPONENT</Team>
          <TeamImage src={computerChoiceImgUrl} alt="opponent choice" />
        </TeamDetailContainer>
      </TeamsContainer>
      <Status>{status}</Status>
      <PlayAgainButton onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainButton>
    </ResultContainer>
  )
}

export default ResultView
