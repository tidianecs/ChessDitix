import { useState } from "react";
import type { Board } from "../models/Board";

function createEmptyBoard(): Board {
    return Array.from({length: 8}, () => 
        Array.from({length: 8}, () => null)
    )
}

function BoardComponent() {
    const [board, setBoard] = useState<Board>(createEmptyBoard())

    return (
        <div className="inline-block border-2 border-gray-800">
            {board.map((_, row_index) => (
                <div key={row_index} className="flex">
                    {_.map((_, col_index) => (
                        <div
                            key={col_index}
                            className={`w-16 h-16 ${(row_index + col_index) % 2 === 0 ? "bg-amber-100" : "bg-amber-800"}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
export default BoardComponent;