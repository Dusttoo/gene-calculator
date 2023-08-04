import styles from "./page.module.css";
import genes from "./genes.json";
import Locus from "./Components/Locus";
import { LocusType } from "./Models/gene";

export default function Home() {
  console.log(genes)
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Geney</h1>
      <div className={styles.locusContainer}>
        {Object.values(genes).map((locus:LocusType) => (
          <div key={locus.name} >
          <Locus locus={locus} />
          </div>
        ))}
      </div>
    </main>
  );
}
