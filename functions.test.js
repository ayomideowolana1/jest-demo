const functions = require("./functions");
require("@jest/globals");

test("capitalize", () => {
  expect(functions.capitalize("ayo")).toBe("Ayo");
});

test("reverse", () => {
  expect(functions.reverseString("ayo")).toBe("oya");
});

test("calculator", () => {
  expect(functions.calculator.add(2, 2)).toBe(4);
  expect(functions.calculator.subtract(2, 2)).toBe(0);
  expect(functions.calculator.divide(2, 2)).toBe(1);
  expect(functions.calculator.multiply(2, 2)).toBe(4);
});

test("ceaser cipher", () => {
  expect(functions.ceaserCipher("abc")).toBe("bcd");
});

test("analyze array", () => {
  expect(functions.analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
