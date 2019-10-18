const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("it is true", () => {
    expect(300 > 10).toBe(true);
    expect(100 < 10000).toBe(true);
    expect(-10000 < 1000).toBe(true);
  });
  
  test("it is false", () => {
    expect("2" === 2).toBe(false);
    expect(0 > 5).toBe(false);
    expect(-20 <= -200).toBe(false);
  });
});