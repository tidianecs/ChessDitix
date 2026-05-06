import type { Color } from "./Color";
import type { TypeOfPiece } from "./TypeOfPiece";

export interface Piece {
    id: number,
    color: Color,
    type: TypeOfPiece
}