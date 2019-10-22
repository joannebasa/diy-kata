/* eslint-disable prettier/prettier */
const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("it returns an array of 3 numbers", () => {
      expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    });

    test("it returns 15 if humanYear is equal to 1", () => {
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    });
  });