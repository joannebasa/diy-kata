// /* eslint-disable prettier/prettier */
// ?string, then split, reverse, ? map, ?parseInt || join()?
// must return an array ? new array
// should reverse order of numbers in array

const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns an array", () => {
    const value = numberToReversedDigits()
    expect(Array.isArray(value)).toBe(true);
  });
  it("returns the number in reverse", () => {
    expect(numberToReversedDigits(1234)).toEqual([4, 3, 2, 1]);
    expect(numberToReversedDigits(3245)).toEqual([5, 4, 2, 3]);
  })
});