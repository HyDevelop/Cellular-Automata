
export interface Box
{
    x: number
    y: number
    xLen: number
    yLen: number
}

export interface GridBlock
{
    gridX: number
    gridY: number
}

// Constant configurations
const GRID_LINE_COLOR = '#5f5f5f';
const GRID_LINE_LEN = 1;
const BORDER_COLOR = '#969696';
const BORDER_LEN = 2;
const BLOCK_LEN = 9;
const CELL_DEAD = '#000000';
const CELL_ALIVE = '#c8c8c8';

// Computed
const BLOCK_FULL_LEN = BLOCK_LEN + GRID_LINE_LEN;

export default class Renderer
{
    private canvas: any;
    private context: any;

    /**
     * Construct a renderer
     *
     * @param canvas
     */
    constructor(canvas: any)
    {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    get width()
    {
        return this.canvas.width;
    }

    get height()
    {
        return this.canvas.height;
    }

    /**
     * Set frame
     *
     * @param width
     * @param height
     */
    public setFrame(width: number, height: number)
    {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    /**
     * Draw an rectangle
     *
     * @param color
     * @param box
     */
    public drawRect(color: string, box: Box)
    {
        this.context.fillStyle = color;
        this.context.fillRect(box.x, box.y, box.xLen, box.yLen);
    }

    /**
     * Draw grid lines
     */
    public drawGrid()
    {
        // Get width and height
        let width = this.width;
        let height = this.height;

        // Loop through all x values
        for (let x = BLOCK_LEN; x < width; x += BLOCK_FULL_LEN)
        {
            // Draw line
            this.drawRect(GRID_LINE_COLOR, {x: x, y: 0, xLen: GRID_LINE_LEN, yLen: height});
        }

        // Loop through all y values
        for (let y = BLOCK_LEN; y < height; y += BLOCK_FULL_LEN)
        {
            this.drawRect(GRID_LINE_COLOR, {x: 0, y: y, xLen: width, yLen: GRID_LINE_LEN});
        }
    }

    /**
     * Draw a block on the grid
     *
     * @param color
     * @param block
     */
    public drawGridBlock(color: string, block: GridBlock)
    {
        this.drawRect(color, {x: block.gridX * BLOCK_FULL_LEN, y: block.gridY * BLOCK_FULL_LEN,
            xLen: BLOCK_LEN, yLen: BLOCK_LEN})
    }
}
