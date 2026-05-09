import type { Board } from "../models/Board";
import type { Coord } from "../models/Coord";
import type { Piece } from "../models/Piece";

export function getValidMoves(piece: Piece, from: Coord, board: Board): Coord[] {
    const validMoves: Coord[] = [];
    const direction = piece.color == 'White' ? -1 : 1
    const oneStep = from.row + direction

    if(piece.type == 'Pawn' && board[oneStep][from.col] == null){
        validMoves.push({ row: oneStep, col: from.col })
    }
    // Pawn Eating in the left diagonal
    if(piece.type == 'Pawn' && from.col - 1 >= 0 && board[oneStep][from.col-1]?.color !== piece.color && board[oneStep][from.col-1] !== null){
        validMoves.push({ row: oneStep, col: from.col-1 })
    }
    // Pawn Eating in the rigth diagonal
    if(piece.type == 'Pawn' && from.col + 1 <= 7 && board[oneStep][from.col+1]?.color !== piece.color && board[oneStep][from.col+1] !== null){
        validMoves.push({ row: oneStep, col: from.col+1 })
    }

    // For the others pieces - later
    return validMoves
}