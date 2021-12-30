function capitalize(string) {
  let splitString = string.split("");
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join("");
}

function reverseString(string) {
  let arr = string.split("");
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse.join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function ceaserCipher(string) {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let lowerCaseString = string.toLowerCase();
  let arr = lowerCaseString.split("");
  let newArr = [];

  arr.forEach((alphabet) => {
    let index = alphabets.indexOf(alphabet) + 1;
    if (index == 26) {
      index = 0;
    }
    newArr.push(alphabets[index]);
  });
  return newArr.join("");
}

function analyzeArray(array) {
  let average,
    min = array[0],
    max = array[0],
    length = array.length;

  let total = 0;
  for (let i = 0; i < length; i++) {
    total += array[i];
  }
  average = total / array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { average, min, max, length };
}
analyzeArray([1, 2, 3, 4, 5]);
module.exports = {
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
};
