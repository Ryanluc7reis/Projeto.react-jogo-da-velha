import { useState,useEffect } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'
/*
Um array com varias posição de forma simplificada
let array = Array(9).fill(0)
   *quantas posição tem *       /qual posição começa
*/     
  const winnerTable =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ]


function Game () {
  const [gameState,setGameState] = useState(Array(9).fill(0)) 
  const [currentPlayer,setCurrentPlayer] = useState (-1)
  const [winner,setWinner] =useState(0,1,-1)


  const handleClick = (pos) => {
    if (gameState[pos] === 0 && winner === 0) {
  let newGamestate = [...gameState] /* "(...alguma variavel )" - serve para copiar os valores de tal variavel */
   newGamestate [pos] = currentPlayer
   setCurrentPlayer(currentPlayer * 1)
   setGameState(newGamestate)
  }
    }
    

  const verifyGame = () => {
    winnerTable.forEach ((line)=>{
      const values = line.map((pos)=> gameState[pos])
      const sum = values.reduce((sum,value)=> sum + value)
      if( sum === 3 || sum === -3) setWinner (sum / 3) /* "||"" = OU .  "/" = divisão */

    })

  }
    useEffect(() =>{
      setCurrentPlayer(currentPlayer * -1)
      verifyGame()
    },[gameState])  
    /*  "useEffect" : utilizado para carregar todo o conteudo da pagina antes de mostrar para o usuario; [] usado para alterar algum função ou alguma variavel */
    
 
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