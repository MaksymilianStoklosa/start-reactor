import { FC, ReactNode } from "react";

export const CellContainer: FC<{ children: ReactNode; justify: "end" | "start" }> = ({ children, justify }) => (
  <div className={`flex items-center justify-${justify} max-lg:justify-center p-4`}>
    <div className="col-auto p-8 bg-gray-500 rounded-lg w-full max-w-[400px] max-sm:p-4">
      <div className="grid grid-cols-3 gap-4 justify-items-center">{children}</div>
    </div>
  </div>
);
