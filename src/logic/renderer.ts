
interface Box
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
     * @constructor
     */
    public Renderer(canvas: any)
    {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

}
