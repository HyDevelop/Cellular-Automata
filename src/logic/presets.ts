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

const PATTERN_CELLULAR_AUTOMATA = 
`.#####.........................................................#..................................................
 #.....#.######.#......#......#....#.#........##...#####.......#.#...#....#.#####..####..#....#...##...#####...##..
 #.......#......#......#......#....#.#.......#..#..#....#.....#...#..#....#...#...#....#.##..##..#..#....#....#..#.
 #.......#####..#......#......#....#.#......#....#.#....#....#.....#.#....#...#...#....#.#.##.#.#....#...#...#....#
 #.......#......#......#......#....#.#......######.#####.....#######.#....#...#...#....#.#....#.######...#...######
 #.....#.#......#......#......#....#.#......#....#.#...#.....#.....#.#....#...#...#....#.#....#.#....#...#...#....#
 .#####..######.######.######..####..######.#....#.#....#....#.....#..####....#....####..#....#.#....#...#...#....#`;

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
            for (let x = 0; x < line.length; x++)
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

    public get CELLULAR_AUTOMATA(): Cell[]
    {
        let banner = this.parse({width: 114, height: 6, pattern: PATTERN_CELLULAR_AUTOMATA});

        // Add random points
        /*for (let i = 0; i < 200; i ++)
        {
            let POSITIONS =
            [
                [-1, -1], [-1, 0], [-1, 1],
                [ 0, -1], [ 0, 0], [ 0, 1],
                [ 1, -1], [ 1, 0], [ 1, 1]
            ];

            let x = Math.floor(Math.random() * 198 - 99);
            let y = Math.floor(Math.random() * 98 - 49);
            let neighborsCount = Math.floor(Math.random() * 4);

            let existingNeighbors = [4];

            // Add neighbors
            for (let j = 0; j < neighborsCount; j++)
            {
                let pos = Math.floor(Math.random() * 8);

                // Already exist
                if (existingNeighbors.includes(pos))
                {
                    j--;
                    continue;
                }

                // Push
                existingNeighbors.push(pos);
                banner.push(this.cell(x + Presets.POSITIONS[pos][0], y + Presets.POSITIONS[pos][1], STATUS_ALIVE))
            }

            banner.push(this.cell(x, y, STATUS_ALIVE));
            // banner.push(...new Presets({x: Math.floor(Math.random() * 20 + i), y: Math.floor(Math.random() * 98 + 1)}).R_PENTOMINO);
        }*/

        return banner;
    }
}
