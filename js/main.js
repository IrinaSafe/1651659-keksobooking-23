//Функция, возвращающая случайное целое число из переданного диапазона включительно

// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    return 'О-ооооу! Кажется вы что-то напутали';
  }

  if (min < 0) {
    return 'Ииии вы опять что-то напутали';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(0,3);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomCoordinates(min, max, numberOfDecimal) {
  const resultCords = (Math.random() * (max - min) + min).toFixed(numberOfDecimal);

  switch(min) {
    case '>= max':
      return 'О-ооооу! Кажется вы что-то напутали';
    case '< 0':
      return 'Ииии вы опять что-то напутали';
    default:
      return parseFloat(resultCords);
  }
}

getRandomCoordinates(1.1,1.2,3);
