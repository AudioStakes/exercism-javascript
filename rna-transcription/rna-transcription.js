const rnaMap = { C: 'G', G:'C', T:'A', A:'U'};

export const toRna = strand => { return strand.split('').map(n => rnaMap[n]).join(''); };
