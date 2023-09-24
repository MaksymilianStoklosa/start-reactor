"use client";

import { useState, useEffect } from "react";
import { generatePassword } from "@/utils/passwordGenerator";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState<number>();
  const generateNewPassword = () => setPassword(generatePassword());

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  return { password, generateNewPassword };
};
