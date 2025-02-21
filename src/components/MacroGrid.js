import React, { useEffect, useRef } from "react";
import "./MacroGrid.css";

const gridSize = 10; // 10x10 grid

const snakes = [16, 48, 64, 79];
const ladders = [3, 22, 41, 72, 99];

const MacrodataGrid = () => {
    const cellRefs = useRef([]);

    useEffect(() => {
        cellRefs.current.forEach((cell) => {
            if (cell) {
                const minWiggleRange = 0.1;
                const wiggleRange = Math.max(
                    Math.random() * 0.3,
                    minWiggleRange
                );
                cell.style.setProperty("--wiggle-range", `${wiggleRange}vw`);
                cell.style.setProperty(
                    "--wiggle-duration",
                    `${Math.random() * 4 + 1}s`
                );
                cell.style.setProperty(
                    "--wiggle-axis",
                    Math.round(Math.random()) ? "wiggle-x" : "wiggle-y"
                );
            }
        });
    }, []);

    const renderGrid = () => {
        const cells = [];

        for (let row = gridSize - 1; row >= 0; row--) {
            const rowCells = [];
            for (let col = 0; col < gridSize; col++) {
                const cellNumber =
                    row % 2 === 0
                        ? row * gridSize + col + 1
                        : row * gridSize + (gridSize - col);

                let cellType = "";
                if (snakes.includes(cellNumber)) cellType = "snake";
                if (ladders.includes(cellNumber)) cellType = "ladder";
                if (!cellType) cellType = "empty";

                rowCells.push(
                    <div
                        key={cellNumber}
                        ref={(el) => (cellRefs.current[cellNumber] = el)}
                        className={`w-12 h-12 flex items-center justify-center text-xl wiggle ${cellType}`}
                    >
                        <span className="cell-text">{cellNumber}</span>
                    </div>
                );
            }
            cells.push(...rowCells);
        }

        return cells;
    };

    return (
        <div className="p-4 bg-gray-850 min-h-screen flex flex-col items-center">
            <div
                className="grid grid-cols-10 gap-1"
                style={{ width: "max-content" }}
            >
                {renderGrid()}
            </div>
            <div className="mt-6 border border-cyan-200 flex items-center relative overflow-hidden">
            <h1 className="p-2 text-2xl">Let's play</h1>
            </div>
        </div>
    );
};

export default MacrodataGrid;
