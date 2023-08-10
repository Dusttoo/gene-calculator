import { GeneResults } from "../../Models/geneSelector";

export default function GeneResultsList(results: GeneResults) {
  return (
    <>
      {Object.keys(results).map((key) => {
        const value = results[key];
        return (
          <div>
            <p>
              {key} : {value}
            </p>
          </div>
        );
      })}
    </>
  );
}
