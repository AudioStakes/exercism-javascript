export const decodedValue = (color_array) => {
  return Number(COLORS.indexOf(color_array[0]).toString() + COLORS.indexOf(color_array[1]).toString());
};

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
