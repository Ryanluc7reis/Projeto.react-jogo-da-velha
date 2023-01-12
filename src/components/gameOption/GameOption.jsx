import classNames from 'classnames'

import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({iconName }) => <Icon iconName={iconName } size ="30px" />

function GameOption ({status, onCLick,isWinner,isDraw }) {
  return (
    <div 
      className={
        classNames(styles.gameOption,{
         [styles.winner] : isWinner,
         [styles.draw ]: isDraw
        })
      } 
      onClick={onCLick}
    >
      {
        status === 1 && <GameIcon iconName="circle" size = '30px' />
      }
      {
        status === -1 && <GameIcon iconName="x" size = '30px' />
      }    
    </div>
  )
}
export default GameOption