const sum = (a: number, b: number): number => a + b;

describe("sum", () => {
  it("returns sum number", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
