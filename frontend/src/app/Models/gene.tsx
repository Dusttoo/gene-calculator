export type LocusType = {
  name: string;
  description: string;
  genes: Gene[];
};

export type Gene = {
  name: string;
  description: string;
  gene: string;
};
