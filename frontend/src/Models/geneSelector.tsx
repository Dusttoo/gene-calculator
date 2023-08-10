export type LocusData = {
  locusTypes: Loci[]
}

export type Loci = {
  name: string;
  description: string;
  genes: Gene[];
};

export type Gene = {
  name: string;
  locus: string;
  description: string;
  gene: string;
};

export type GeneButtonProps = {
  gene: Gene
  setMaxSelected: (val: boolean) => void;
  maxSelected: boolean
}

export type Parent = {
  parent: string;
};

export type SelectedGenes = {
  locus: string;
  gene: string;
};

export type SelectedLoci = {
  [key: string]: string[]
};

export type GeneResults = {
  [key: string]: string[];
};
