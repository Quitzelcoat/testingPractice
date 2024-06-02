import practice from "./practice";

// capital first letter test
test("Capitalize the first letter of the string", () => {
  expect(practice.capitalize("hello")).toBe("Hello");
  expect(practice.capitalize("world")).toBe("World");
  expect(practice.capitalize("")).toBe("");
  expect(practice.capitalize("123abc")).toBe("123abc");
});

// Reverse the given string test

test("Reverse the give string", () => {
  expect(practice.reverseString("hello")).toBe("olleh");
  expect(practice.reverseString("reverse")).toBe("esrever");
  expect(practice.reverseString("12abC317jfl")).toBe("lfj713Cba21");
});

// Calculator test
test("Perform Calculator operations", () => {
  // add
  expect(practice.calculator.add(1, 2)).toBe(3);

  // substract
  expect(practice.calculator.substract(2, 3)).toBe(-1);
  expect(practice.calculator.substract(2, 1)).toBe(1);

  // multiply
  expect(practice.calculator.multiply(3, 5)).toBe(15);
  expect(practice.calculator.multiply(5, -5)).toBe(-25);

  //divide
  expect(practice.calculator.divide(25, 5)).toBe(5);
});

// Caeser cipher changing the position of each character to the given number
test("Caser cipher function, shifting the string position", () => {
  expect(practice.caeserCipher("xyz", 3)).toBe("abc");

  expect(practice.caeserCipher("HeLLo", 3)).toBe("KhOOr");

  expect(practice.caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// analyze array test
test("Analyze the following array", () => {
  expect(practice.analyzeArray([1, 8, 3, 4, 2, 6]));
});
