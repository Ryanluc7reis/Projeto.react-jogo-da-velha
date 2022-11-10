import { useState } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'
/*
Um array com varias posição de forma simplificada
let array = Array(9).fill(0)
   *quantas posição tem *       /qual posição começa
*/

function Game () {
  const [gameState,setGameState] = useState(Array(9).fill(0)) 

  const [currentPlayer,setCurrentPlayer] = useState (1)
  const handleClick = (pos) => {
    if (gameState[pos] === 0) {
  let newGamestate = [...gameState] /* "(...alguma variavel )" - serve para copiar os valores de tal variavel */
   newGamestate [pos] = currentPlayer
   setCurrentPlayer(currentPlayer * -1)
   setGameState(newGamestate)
  }
    }
  console.log(gameState)
  return (
    <div className={styles.gameContent}>
       <div className={styles.game}>
      {
        gameState.map((value ,pos) =>
         
         <GameOption 
            key={`game-option-pos-${pos}`}
            status={value}
            onCLick={() => handleClick(pos)}
        
         /> )
      }
     
       </div>
       <div className={styles.gameInfo}>
        <h4>Próximo a jogar:</h4>
        {
          currentPlayer === 1 && <Icon iconName='circle' /> 
        }
         {
          currentPlayer === -1 && <Icon iconName='x' /> 
        }
       </div>
    </div>
  )

}
export default Game