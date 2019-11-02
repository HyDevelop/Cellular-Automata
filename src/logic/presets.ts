import {Cell, Point} from '@/logic/world';

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
     */
    private cell(offsetX: number, offsetY: number): Cell
    {
        return {point: {x: this.x + offsetX, y: this.y + offsetY}, status: {alive: true}}
    }

    public R_PENTOMINO(center: Point): Cell[]
    {
        const x = center.x;
        const y = center.y;

        return [
            this.cell(1, 0),
            this.cell(0, 1),
            this.cell(1, 1),
            this.cell(1, 2),
            this.cell(2, 2),
        ];
    }
}
