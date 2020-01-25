const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

export const decodedValue = colors => colors.slice(0, 2).map(c => COLORS.indexOf(c)).join('') | 0;
