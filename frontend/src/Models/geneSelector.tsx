export type Gene = {
  name: string;
  description: string;
  gene: string;
  // selectedGenes: string[]
};

export type Loci = {
  name: string;
  description: string;
  genes: Gene[];
};

export type Parent = {
  parent: string;
};