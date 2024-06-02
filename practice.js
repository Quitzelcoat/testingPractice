// First letter capital of string
function capitalize(str) {
  if (str.length === 0) {
    return str;
  }
  const capital = str.charAt(0).toUpperCase() + str.slice(1);
  return capital;
}

// reverse the whole string.
function reverseString(str) {
  if (str.length === 0) {
    return str;
  }
  const strArr = str.split("");
  const reverseStr = strArr.reverse().join("");
  return reverseStr;
}

// create a calculator
const calculator = {
  add: (a, b) => {
    return a + b;
  },
  substract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

// Caeser Cipher shifting each string character test
function shiftChar(char, shift) {
  const charCode = char.charCodeAt(0);

  // uppercase letters (A-Z)
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(
      ((((charCode - 65 + shift) % 26) + 26) % 26) + 65
    );
  }

  // lowercase letters (a-z)
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(
      ((((charCode - 97 + shift) % 26) + 26) % 26) + 97
    );
  }

  return char;
}

function caeserCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

// analyze the following array test.
function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: 0,
      min: null,
      max: null,
      length: 0,
    };
  }

  const sum = arr.reduce((total, num) => {
    total + num, 0;
  });

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = sum / length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

export default {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray,
};
