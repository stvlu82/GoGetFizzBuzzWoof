import { assert } from "chai";
import { fizzBuzzOrWoof } from "../src/fizzBuzzOrWoof.js";

describe("fizzBuzzOrWoof", function () {
  it("should return {number} if not divisible by or not contains 3, 5, 7", function () {
    const expected = "1";
    const actual = fizzBuzzOrWoof(1);
    assert.equal(actual, expected);
  });
  it("should return Fizz if divisible by 3", function () {
    const expected = "Fizz (6)";
    const actual = fizzBuzzOrWoof(6);
    assert.equal(actual, expected);
  });

  it("should return Buzz if divisible by 5", function () {
    const expected = "Buzz (10)";
    const actual = fizzBuzzOrWoof(10);
    assert.equal(actual, expected);
  });

  it("should return Woof if divisible by 7", function () {
    const expected = "Woof (14)";
    const actual = fizzBuzzOrWoof(14);
    assert.equal(actual, expected);
  });

  it("should return Fizz if contains 3", function () {
    const expected = "Fizz (31)";
    const actual = fizzBuzzOrWoof(31);
    assert.equal(actual, expected);
  });

  it("should return Buzz if contains 5", function () {
    const expected = "Buzz (52)";
    const actual = fizzBuzzOrWoof(52);
    assert.equal(actual, expected);
  });

  it("should return Woof if contains 7", function () {
    const expected = "Woof (71)";
    const actual = fizzBuzzOrWoof(71);
    assert.equal(actual, expected);
  });

  it("should return Fizz Fizz if divisible by and contains 3", function () {
    const expected = "Fizz Fizz (3)";
    const actual = fizzBuzzOrWoof(3);
    assert.equal(actual, expected);
  });

  it("should return Buzz Buzz if divisible by and contains 5", function () {
    const expected = "Buzz Buzz (5)";
    const actual = fizzBuzzOrWoof(5);
    assert.equal(actual, expected);
  });

  it("should return Woof Woof if divisible by and contains 7", function () {
    const expected = "Woof Woof (7)";
    const actual = fizzBuzzOrWoof(7);
    assert.equal(actual, expected);
  });

  it("should return Fizz Fizz Fizz if divisible by and contains multiple 3", function () {
    const expected = "Fizz Fizz Fizz (33)";
    const actual = fizzBuzzOrWoof(33);
    assert.equal(actual, expected);
  });

  it("should return Buzz Buzz Buzz if divisible by and contains multiple 5", function () {
    const expected = "Buzz Buzz Buzz (55)";
    const actual = fizzBuzzOrWoof(55);
    assert.equal(actual, expected);
  });

  it("should return Woof Woof Woof if divisible by and contains multiple 7", function () {
    const expected = "Woof Woof Woof (77)";
    const actual = fizzBuzzOrWoof(77);
    assert.equal(actual, expected);
  });

  it("should return Fizz Fizz Buzz for 30", function () {
    const expected = "Fizz Fizz Buzz (30)";
    const actual = fizzBuzzOrWoof(30);
    assert.equal(actual, expected);
  });

  it("should return Buzz Woof Woof for 70", function () {
    const expected = "Buzz Woof Woof (70)";
    const actual = fizzBuzzOrWoof(70);
    assert.equal(actual, expected);
  });

  it("should return Fizz Fizz Woof for 63", function () {
    const expected = "Fizz Fizz Woof (63)";
    const actual = fizzBuzzOrWoof(63);
    assert.equal(actual, expected);
  });

  it("should return Fizz Buzz Buzz Woof for 35", function () {
    const expected = "Fizz Buzz Buzz Woof (35)";
    const actual = fizzBuzzOrWoof(35);
    assert.equal(actual, expected);
  });

  it("should return Fizz Fizz Buzz Woof Woof for 357", function () {
    const expected = "Fizz Fizz Buzz Woof Woof (357)";
    const actual = fizzBuzzOrWoof(357);
    assert.equal(actual, expected);
  });
});
