import styles from "./Post.module.css";

export function Post() {
  return (
    <article>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Paulo Miranda</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time title="11 de maio as 8 horas" dateTime="">
          Macaco vai tomar no seu cu
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉<a href="#">Macaco</a></p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario"
        />
        <button type="submit">Deixar Comentario</button>
      </form>
    </article >
  )
}
