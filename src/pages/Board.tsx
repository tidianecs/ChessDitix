import { useState } from "react";
import type { Board } from "../models/Board";
import type { Piece } from "../models/Piece";
import type { Coord } from "../models/Coord";

function createEmptyBoard(): Board {
    return Array.from({length: 8}, () => 
        Array.from({length: 8}, () => null)
    )
}

function initializeBoard(): Board {
    const board = createEmptyBoard();

    //White side
    for(let col = 0; col < 8; col++){
        board[6][col] = { color: "White", type: "Pawn" }
    }
    board[7][0] = { color: 'White', type: 'Rook' }
    board[7][7] = { color: 'White', type: 'Rook' }
    board[7][1] = { color: 'White', type: 'Knight' }
    board[7][6] = { color: 'White', type: 'Knight' }
    board[7][2] = { color: 'White', type: 'Bishop' } 
    board[7][5] = { color: 'White', type: 'Bishop' } 
    board[7][3] = { color: 'White', type: 'Queen' }
    board[7][4] = { color: 'White', type: 'King' }

    //Black side
    for(let col = 0; col < 8; col++){
        board[1][col] = { color: "Black", type: "Pawn" }
    }
    board[0][0] = { color: 'Black', type: 'Rook' }
    board[0][7] = { color: 'Black', type: 'Rook' }
    board[0][1] = { color: 'Black', type: 'Knight' }
    board[0][6] = { color: 'Black', type: 'Knight' }
    board[0][2] = { color: 'Black', type: 'Bishop' } 
    board[0][5] = { color: 'Black', type: 'Bishop' } 
    board[0][3] = { color: 'Black', type: 'Queen' }
    board[0][4] = { color: 'Black', type: 'King' }

    return board;
}

function getEmojiPiece(piece: Piece): string {
    if(piece.color == "White"){
        switch(piece.type){
            case 'Pawn':
                return "♙"
            case 'Bishop':
                return "♗"
            case 'Knight':
                return "♘"
            case 'Rook':
                return "♖"
            case 'Queen':
                return "♕"
            case 'King':
                return "♔"
            default:
                return ""
        }
    }
    else if(piece.color == "Black"){
        switch(piece.type){
            case 'Pawn':
                return "♟"
            case 'Bishop':
                return "♝"
            case 'Knight':
                return "♞"
            case 'Rook':
                return "♜"
            case 'Queen':
                return "♛"
            case 'King':
                return "♚"
            default:
                return ""
        }
    }
    else{
        return ""
    }
}

function BoardComponent() {
    const [ board, setBoard ] = useState<Board>(initializeBoard());
    const [ selectedSquare, setSelectedSquare ] = useState<Coord | null>(null);

    function handleSquareClick(row: number, col: number){
        const clickedPiece = board[row][col];

        if(selectedSquare == null){
            if(clickedPiece != null){
                setSelectedSquare({row: row, col: col})
                console.log("[ " + row + ", " + col + " ]");
            }
        }
        else{
            const newBoard = board.map(row => [...row]);
            const piece = newBoard[selectedSquare.row][selectedSquare.col];
            newBoard[row][col] = piece
            newBoard[selectedSquare.row][selectedSquare.col] = null
            setBoard(newBoard)
            setSelectedSquare(null)
        }
    }

    return (
        <div className="inline-block border-2 border-gray-800">
            {board.map((square, row_index) => (
                <div key={row_index} className="flex">
                    {square.map((piece, col_index) => (
                        <div key={col_index} onClick={() => {handleSquareClick(row_index, col_index)}} className={`flex items-center justify-center text-3xl w-16 h-16 ${(row_index + col_index) % 2 === 0 ? "bg-amber-100" : "bg-green-700"}`}>
                        {piece != null ? getEmojiPiece(piece) : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default BoardComponent;