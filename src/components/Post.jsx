import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/paulodev1612.png"
          />
          <div className={styles.authorInfo}>
            <strong>Paulo Viana</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="30 de junho às 14:00h" dateTime="2022-06-30 14:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          {'  '}
          <a href="#">#nlw</a>
          {'  '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
