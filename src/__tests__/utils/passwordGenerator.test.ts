import { generatePassword, PASSWORD_LENGTH } from "@/utils/passwordGenerator";

test("Generate password", () => {
  const password = String(generatePassword());
  expect(password).toHaveLength(PASSWORD_LENGTH);
  expect(password).toMatch(/[1-9]/);
});
