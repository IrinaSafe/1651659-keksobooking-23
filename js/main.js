/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @return {number} случайное целое число из выбранного диапазона
 */
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return undefined;
  }

  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  const resultCords = Math.random() * (max - min + 1);

  return Math.floor(resultCords) + min;
};
getRandomIntInclusive(10, 2);

/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @return {number} случайное число с плавающей точкой из выбранного диапазона
 */
const getRandomCoordinates = (min, max, numberOfDecimal) => {
  if (min < 0) {
    return undefined;
  }

  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  const resultCords = (Math.random() * (max - min + 1) + min).toFixed(numberOfDecimal);

  return parseFloat(resultCords);
};
getRandomCoordinates(1.210, 1.300, 3);
