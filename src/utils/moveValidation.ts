import type { Board } from "../models/Board";
import type { Coord } from "../models/Coord";
import type { Piece } from "../models/Piece";

export function getValidMoves(piece: Piece, from: Coord, board: Board): Coord[] {
    const validMoves: Coord[] = [];
    const direction = piece.color == 'White' ? -1 : 1
    const oneStep = from.row + direction

    // Pawn Eating in the left diagonal
    if(piece.type == 'Pawn' && from.col - 1 >= 0 && board[oneStep][from.col-1]?.color !== piece.color && board[oneStep][from.col-1] !== null){
        validMoves.push({ row: oneStep, col: from.col-1 })
    }
    // Pawn Eating in the rigth diagonal
    if(piece.type == 'Pawn' && from.col + 1 <= 7 && board[oneStep][from.col+1]?.color !== piece.color && board[oneStep][from.col+1] !== null){
        validMoves.push({ row: oneStep, col: from.col+1 })
    }
    if(piece.type == 'Pawn' && board[oneStep][from.col] == null){
        validMoves.push({ row: oneStep, col: from.col })
    }else if(piece.type == 'Rook') {
        // foward
        let r_forward = from.row - 1
        while(r_forward >= 0){
            if(board[r_forward][from.col] == null){
                validMoves.push({ row: r_forward, col: from.col })
            }else if(board[r_forward][from.col]?.color != piece.color) {
                validMoves.push({ row: r_forward, col: from.col  })
                break
            }else{
                break
            }
            r_forward--
        }

        // backward
        let r_backward = from.row + 1
        while(r_backward <= 7){
            if(board[r_backward][from.col] == null){
                validMoves.push({ row: r_backward, col: from.col })
            }else if(board[r_backward][from.col]?.color != piece.color) {
                validMoves.push({ row: r_backward, col: from.col  })
                break
            }else{
                break
            }
            r_backward++
        }

        // rigthward
        let c_rigthward = from.col + 1
        while(c_rigthward <= 7){
            if(board[from.row][c_rigthward] == null){
                validMoves.push({ row: from.row, col: c_rigthward })
            }else if(board[from.row][c_rigthward]?.color != piece.color) {
                validMoves.push({ row: from.row, col: c_rigthward })
                break
            }else{
                break
            }
            c_rigthward++
        }

        // leftward
        let c_leftward = from.col - 1   
        while(c_leftward >= 0){
            if(board[from.row][c_leftward] == null){
                validMoves.push({ row: from.row, col: c_leftward })
            }else if(board[from.row][c_leftward]?.color != piece.color) {
                validMoves.push({ row: from.row, col: c_leftward })
                break
            }else{
                break
            }
            c_leftward--
        }
    }

    // For the others pieces - later
    return validMoves
}