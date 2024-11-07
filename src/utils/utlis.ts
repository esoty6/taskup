export const getRandomIndex = <T>(array: T[]): number => {
  return Math.floor(Math.random() * array.length);
};

export const getRandomElement = <T>(array: T[]): T => {
  return array[getRandomIndex(array)];
};
