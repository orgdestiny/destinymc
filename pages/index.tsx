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
          Bem vindo a o DestinyMC
        </h1>

        <p className={styles.description}>
          Esse site esta em construção.
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{'destinyorg.me'}
        </a>
      </footer>
    </div>
  )
}
