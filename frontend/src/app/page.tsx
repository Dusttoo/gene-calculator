import styles from "./page.module.css";
import genes from "./genes.json";
import Locus from "./Components/Locus";
import { Loci } from "./Models/locus";

export default function Home() {
  console.log(genes)
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Geney</h1>
      <div className={styles.locusContainer}>
        {Object.values(genes).map((locus: Loci) => (
          <div key={locus.genes[0].gene} >
          <Locus name={locus.name} description={locus.description} genes={locus.genes} />
          </div>
        ))}
      </div>
    </main>
  );
}
