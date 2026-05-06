import type { Color } from "./Color";
import type { TypeOfPiece } from "./TypeOfPiece";

export interface Piece {
    color: Color,
    type: TypeOfPiece
}