import { FC } from "react";
import { PASSWORD_LENGTH } from "@/utils/passwordGenerator";

export const ProgressBar: FC<{ steps: number }> = ({ steps }) => (
  <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
    <div className="h-1 bg-green-500" style={{ width: `${(100 / PASSWORD_LENGTH) * steps}%` }} />
  </div>
);
