export const PASSWORD_LENGTH = 5;

const generateNumber = () => Math.floor(Math.random() * (9 - 1 + 1) + 1);

export const generatePassword = () => {
  let password = "";

  for (let i = 0; i <= PASSWORD_LENGTH - 1; i++) {
    password += generateNumber();
  }

  return Number(password);
};
