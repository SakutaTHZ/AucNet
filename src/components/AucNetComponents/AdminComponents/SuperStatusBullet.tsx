import React from "react";

interface SuperStatusBulletProps {
  customClass?: string;
  activeColor?: string;
  isActive?: boolean;
  title?: string;
  count?: number;
  onClick?: () => void;
}

const SuperStatusBullet: React.FC<SuperStatusBulletProps> = ({
  title, activeColor, isActive, count, onClick
}) => {

  return (
    <div
    className={`w-full flex gap-2 items-center justify-between cursor-pointer border-2 border-transparent p-2 rounded-md transition-colors ${
      isActive ? activeColor : 'bg-gray-100 border-gray-300'
    }`}
      onClick={onClick}
    >
      <p className="title font-semibold text-sm">{title}</p>
      <span className="count bg-gray-100 px-2 rounded-lg">{count}</span>
    </div>
  );
};

export default SuperStatusBullet;
