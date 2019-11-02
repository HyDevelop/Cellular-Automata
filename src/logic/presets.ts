import {Cell, Point, Status, STATUS_ALIVE, STATUS_DEAD} from '@/logic/world';

export interface Pattern
{
    pattern: string
    width: number
    height: number
}

const PATTERN_R_PENTOMINO =
    `.##
     ##.
     .#.`;

export default class Presets
{
    x: number;
    y: number;

    constructor(center: Point)
    {
        this.x = center.x;
        this.y = center.y;
    }

    /**
     * Make a cell
     *
     * @param offsetX
     * @param offsetY
     * @param status
     */
    private cell(offsetX: number, offsetY: number, status: Status): Cell
    {
        return {point: {x: this.x + offsetX, y: this.y + offsetY}, status: status}
    }

    /**
     * Parse pattern
     *
     * @param pattern
     */
    public parse(pattern: Pattern): Cell[]
    {
        // Split string into 2d array
        let lines: string[] = pattern.pattern.replace(/ /g, '').split('\n');
        let result: Cell[] = [];

        let centerX = Math.floor(pattern.width / 2);
        let centerY = Math.floor(pattern.height / 2);

        // Loop through lines
        lines.forEach((line, y) =>
        {
            for (let x = 0; x < lines.length; x++)
            {
                result.push(this.cell(x - centerX, y - centerY, line.charAt(x) == '#' ? STATUS_ALIVE : STATUS_DEAD))
            }
        });

        return result;
    }

    public get R_PENTOMINO(): Cell[]
    {
        return this.parse({width: 3, height: 3, pattern: PATTERN_R_PENTOMINO})
    }
}
