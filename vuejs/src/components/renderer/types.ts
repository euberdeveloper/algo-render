export enum Cell {
    EMPTY = 'empty',
    BLACK = 'black',
    WHITE = 'white'
}
export type Grid = Cell[][];

export enum Direction {
    TOP,
    RIGHT,
    DOWN,
    LEFT
}
export interface Path {
    start: {
        x: number;
        y: number;
    };

    moves: Direction[];
}