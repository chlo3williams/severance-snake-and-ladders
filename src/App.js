import React from "react";
import MacrodataGrid from "./components/MacroGrid";
import TopBar from "./components/TopBar";

import "./App.css";

function App() {
    return (
        <div className="relative w-full h-screen bg-background-dark scanlines overflow-hidden">
            <TopBar />
            <MacrodataGrid />
        </div>
    );
}

export default App;
