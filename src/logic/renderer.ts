
export interface Box
{
    x: number
    y: number
    xLen: number
    yLen: number
}

// Constant configurations
const GRID_LINE_COLOR = '#5f5f5f';
const GRID_LINE_LEN = 1;
const BORDER_COLOR = '#969696';
const BORDER_LEN = 2;
const BLOCK_LEN = 9;

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
}
