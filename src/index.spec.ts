import { replaceContents } from "./replace";

test("throws if string not found", () => {
  try {
    replaceContents("<!--start-->", "<!--end-->", "Hello", "world");
  } catch (error) {
    expect(error).toBeDefined();
  }
});

test("replaces string", () => {
  expect(
    replaceContents("<!--start-->", "<!--end-->", "Hello <!--start-->OK<!--end--> person", "nice")
  ).toBe("Hello <!--start-->nice<!--end--> person");
});
