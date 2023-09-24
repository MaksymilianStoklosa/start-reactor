"use client";

import { useState } from "react";
import { Cell } from "@/components/Cell";
import { CellContainer } from "@/components/CellContainer";
import { usePasswordGenerator } from "@/hooks/usePasswordGenerator";
import { useRunGame } from "@/hooks/useRunGame";
import { ProgressBar } from "@/components/ProgressBar";
import { PASSWORD_LENGTH } from "@/utils/passwordGenerator";

const cells = Array.from(Array(9).keys());

export default function Home() {
  const [steps, setStep] = useState(0);
  const [enteredPassword, setEnteredPassword] = useState("");
  const { password, generateNewPassword } = usePasswordGenerator();
  const { activePasswordElement, isRunning } = useRunGame({ password, steps });

  const validateValue = (passwordElement: number, index: number) =>
    String(passwordElement) === String(password).charAt(index);

  const resetGameState = () => {
    setStep(0);
    setEnteredPassword("");
    generateNewPassword();
  };

  const goToNextStep = () => {
    const isCompleted = steps + 1 === PASSWORD_LENGTH;

    if (isCompleted) {
      resetGameState();
    } else {
      setStep(steps + 1);
      setEnteredPassword("");
    }
  };

  const onCellClick = (passwordElement: number) => {
    if (isRunning) return;
    const value = enteredPassword + passwordElement;

    setEnteredPassword(value);

    const isValidValue = validateValue(passwordElement, value.length - 1);

    if (!isValidValue) {
      return resetGameState();
    }

    if (enteredPassword.length === steps) goToNextStep();
  };

  return (
    <main className="p-20 h-screen max-sm:p-4">
      <div className="flex justify-center items-center h-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="col-span-3 p-4">
            <ProgressBar steps={steps} />
          </div>
          <div className="col-span-3 p-4">
            <ProgressBar steps={enteredPassword.length} />
          </div>

          <CellContainer justify="end">
            {cells.map((_, index) => (
              <Cell key={index} isActive={Number(activePasswordElement) === index + 1} />
            ))}
          </CellContainer>

          <CellContainer justify="start">
            {cells.map((_, index) => (
              <Cell
                key={index}
                customClass="flex justify-center items-center cursor-pointer hover:bg-gray-300 transition"
                onClick={() => onCellClick(index + 1)}
                disabled={isRunning}
              />
            ))}
          </CellContainer>
        </div>
      </div>
    </main>
  );
}
