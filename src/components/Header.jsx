import styles from './Header.module.css'

import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ícone da logo Intra Company Feed" />
      <strong>Intra Company Feed</strong>
    </header>
  )
}
