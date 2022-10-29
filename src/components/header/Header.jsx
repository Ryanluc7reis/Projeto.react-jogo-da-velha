import styles from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icon/Icon'


function Header  () {
    return (
      <div className={styles.header}>
        <Title>Jogo Da Velha </Title>
      <Subtitle>Criado por Ryan Lucas</Subtitle>
        <div className={styles.iconContent}>
          <Icon iconName="github" link="https://github.com/Ryanluc7reis" />
        </div>
      </div>

    )
}
export default Header

