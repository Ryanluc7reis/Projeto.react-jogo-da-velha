import styles from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"


function Header  () {
    return (
      <div className={styles.header}>
        <Title>Jogo Da Velha </Title>
      <Subtitle>Criado por Ryan Lucas</Subtitle>
      </div>

    )
}
export default Header

