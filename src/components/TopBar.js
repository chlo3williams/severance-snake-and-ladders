import React, { useEffect, useState } from "react";
import logo from "../assets/lumon-logo.svg";

const TopBar = ({ title = "Snakes and Ladders", progress = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-cyan-400 p-2 flex items-center justify-between text-cyan-200">
      <div className="text-lg font-bold tracking-wide">{title}</div>

      <div className="flex-1 mx-4 relative">
        <div className="h-6 border border-cyan-200 flex items-center relative overflow-hidden">
          <div
            className="h-full"
            style={{ width: `${width}%`, transition: "width 0.5s ease-in-out" }}
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center text-sm font-semibold">
          {progress}% Complete
        </div>
      </div>

      <div className="flex items-center justify-end w-40">
        <img src={logo} alt="Lumon Logo" className="w-32 h-auto" />
      </div>
    </div>
  );
};

export default TopBar;