import { classes } from "@/utils/classes";

describe("classes tests", () => {
  it("Should merge strings to className", () => {
    const myClass = classes(["bg-black", "h-24", "my-super-class"]);
    expect(myClass).toEqual("bg-black h-24 my-super-class");
  });

  it("Should ingore falsy values", () => {
    const myClass = classes(["bg-black", "h-24", null, undefined, "", false] as string[]);
    expect(myClass).toEqual("bg-black h-24");
  });
});
