import add from "./add";
test("It should return 4", () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});
