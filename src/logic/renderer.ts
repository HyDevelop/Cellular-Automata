
export interface Box
{
    x: number
    y: number
    xLen: number
    yLen: number
}

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
