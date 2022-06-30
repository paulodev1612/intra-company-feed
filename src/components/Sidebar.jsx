import { PencilSimpleLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/paulodev1612.png"
        />
        <strong>Paulo Viana</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
