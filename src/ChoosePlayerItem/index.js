import {PlayerItem, Button, Image} from './styledComponent'

const ChoosePlayerItem = props => {
  const {eachItem, userSelectedItem} = props
  const {id, imageUrl} = eachItem
  const onClickItem = () => {
    userSelectedItem(id)
  }
  return (
    <PlayerItem>
      <Button onClick={onClickItem} data-testid={`${id.toLowerCase()}Button`}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </PlayerItem>
  )
}
export default ChoosePlayerItem
