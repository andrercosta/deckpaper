import Button from "./components/Button";
import RandomPaper from "./components/RandomPaper";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.c_home}>
      <h1 className={styles.c_home__title}>
        Deck<span>Paper</span>
      </h1>

      <RandomPaper />
      <Button>
        <h1>Teste</h1>
      </Button>
    </main>
  );
}
