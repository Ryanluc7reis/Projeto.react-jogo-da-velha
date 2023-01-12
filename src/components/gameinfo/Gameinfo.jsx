import styles from './Gameinfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({currentPlayer,winner,onReset,isDraw}) {
  
  const shoudEnableButton = ()=> winner !== 0 || isDraw  /* <-- obs: quando for algo q representamos de com false ou true podemos fazer assim
  outra forma de representa isso  {    
    if ( winner !== 0 ) return true
    if ( isDraw ) return true
  }*/                        
  winner !== 0 || isDraw 
  return (
    <div className={styles.gameInfo}>
        {
          !isDraw && winner === 0 && /* "!" = SE NAO OU NEGAÇÃO DE ALGO */
            <>
              <h4>Próximo a jogar:</h4>
              {
                currentPlayer === 1 && <Icon iconName='circle' /> 
              }
              {
                currentPlayer === -1 && <Icon iconName='x' /> 
              }
          
            </>
        }
        {
          !isDraw && winner !== 0 &&  /* "!==" diferente */
            <>
              <h4>Fim de jogo! Campeão:</h4>
                {
                  winner === 1 && <Icon iconName='circle' />
                }
                {
                  winner === -1 && <Icon iconName='x' />
                }
            </>
        }
        {
          isDraw && <h4>Empate !</h4>
          
        }
        <Button
        onClick={onReset} 
        disabled={!shoudEnableButton()}
        >
          Reniciar 
        </Button>        
    </div>
  )
}
export default GameInfo