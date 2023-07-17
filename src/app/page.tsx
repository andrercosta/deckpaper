import RandomPaper from './components/RandomPaper'
import styles from './page.module.scss'
import variables from './variables.module.scss'


export default function Home() {

  return (
    <main className={styles.c_home} >
      <h1 className={ styles.c_home__title }>Deck<span>Paper</span></h1>

     <RandomPaper/>
    </main>
  )
}
