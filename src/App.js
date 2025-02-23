import React from "react";
import { useSelector } from "react-redux";
import GameModeSwitch from "./components/GameModeSwitch";
import MacrodataGrid from "./components/MacroGrid";
import TopBar from "./components/TopBar";

import "./App.css";
import DiceRoll from "./components/DiceRoll";

const App = () => {
    const players = useSelector((state) => state.game.players);
    const gameMode = useSelector((state) => state.game.gameMode);

    return (
        <div className="relative w-full h-screen bg-background-dark scanlines overflow-hidden">
            <TopBar />
            <GameModeSwitch />
            <div className="flex h-screen bg-gray-900 text-white p-4">
                <div className="flex-1 p-4">
                    <MacrodataGrid />
                </div>

                <div className="w-1/4 p-4 ml-4">
                    <DiceRoll />
                </div>
            </div>
        </div>
    );
};

export default App;
