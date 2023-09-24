import { classes } from "@/utils/classes";
import { FC } from "react";

interface CellProps {
  isActive?: boolean;
  customClass?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Cell: FC<CellProps> = ({ isActive, customClass = "", onClick, disabled }) => {
  const getBackground = () => {
    if (disabled) return "bg-gray-700";
    if (isActive) return "bg-green-500";
    return "bg-white";
  };

  const cellClasses = classes(["col-auto", "rounded-md", "h-24", "w-24", "shadow", getBackground(), customClass]);

  return <div className={cellClasses} onClick={onClick} />;
};
