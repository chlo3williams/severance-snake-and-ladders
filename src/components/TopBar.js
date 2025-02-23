import React, { useEffect, useState } from "react";
import logo from "../assets/lumon-logo.svg";

const TopBar = ({ title = "Snakes and Ladders", progress = 0 }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(progress);
    }, [progress]);

    return (
        <div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-cyan-400 p-2 flex items-center justify-between text-cyan-200">
            <div className="flex-1 ml-4 mr-[-3rem] relative">
                <div className="h-[41px] l-12 border border-r-0 border-cyan-200 flex items-center relative overflow-hidden">
                    <div className="p-2 text-lg font-bold tracking-wide">
                        {title}
                    </div>
                    <div
                        className="h-full"
                        style={{
                            width: `${width}%`,
                            transition: "width 0.5s ease-in-out",
                        }}
                    />
                </div>
                <div className="pr-[2rem] absolute inset-0 flex justify-end items-center text-2xl font-semibold">
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
