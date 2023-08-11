import { GeneResults } from "../../Models/geneSelector";

export default function GeneResultsList(results: GeneResults) {
  const lociResults = Object.keys(results.results);
  const parseResults = () => {
    lociResults.map((key) => {
      const values = results.results[key]
      values.map((value) => {

        return (
          <div key={key}>
            <p>
              {key} : {value}
            </p>
          </div>
        );
        
    })
    })
  }
  return (
    <>
      {parseResults()}
    </>
  );
}
