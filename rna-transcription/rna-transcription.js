//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  let dna = "";
  for (let i of rna) {
    dna += pairOfRnaAndDna[i];
  }
  return dna
};

export const pairOfRnaAndDna = { C: 'G', G:'C', T:'A', A:'U'}
