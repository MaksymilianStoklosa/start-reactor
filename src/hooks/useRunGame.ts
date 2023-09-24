"use client";

import { useState, useEffect, useCallback } from "react";

interface RunGameProps {
  steps: number;
  password?: number;
}

export const TIMEOUT = 450;

export const useRunGame = ({ steps, password }: RunGameProps) => {
  const [activePasswordElement, setActivePasswordElement] = useState<null | number>(null);
  const [isRunning, setRunningStatus] = useState(false);

  const toggleRunningStatus = () => setRunningStatus((current) => !current);

  const changeActiveElement = useCallback(
    (element: number | null) =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(setActivePasswordElement(element));
        }, TIMEOUT)
      ),
    []
  );

  useEffect(() => {
    (async function runGame() {
      toggleRunningStatus();
      for (let i = 0; i <= steps; i++) {
        const passwordElement = Number(String(password)[i]);

        await changeActiveElement(passwordElement);
        await changeActiveElement(null);
      }
      toggleRunningStatus();
    })();
  }, [changeActiveElement, password, steps]);

  return { activePasswordElement, isRunning };
};
