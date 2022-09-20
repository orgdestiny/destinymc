import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <title>DestinyMC</title>
        <meta name="description" content="Minecraft Server" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className={styles.main}>
        <h1>
          Bem vindo a {<a href="https://destinymc.me" className={styles.DestinyMC}>DestinyMC</a>}
        </h1>

        <p className={styles.description}>
          Esse site esta em construção.
        </p>

      </main>

      <footer className={styles.footer}>
        <div className={styles.powered}>
          <a href="https://orgdestiny.me">
          © 2022 Destiny Developers Team
          </a>
        </div>
      </footer>
    </div>
  )
}
