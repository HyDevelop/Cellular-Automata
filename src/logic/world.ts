/**
 * Config of a world
 */
interface WorldConfig
{
    // Meta information
    name: string
    width: number
    height: number
    rules: any
    states: any
    presetCells: Cell[]
}

/**
 * A point contains a x coordinate and a y coordinate.
 */
interface Point
{
    x: number
    y: number
}

/**
 * Status of a cell. Currently is either dead or alive.
 */
interface Status
{
    alive: boolean
}

/**
 * A Cell contains its coordinates and its status
 */
interface Cell
{
    point: Point
    status: Status
}

export default class World
{
    // Default status
    private static defaultStatus: Status = {alive: false};

    // Config
    config: WorldConfig;

    // Grid (grid[x][y] = grid state)
    grid: Status[][];

    // Active points (Undefined = no cell)
    activePoints: Point[];

    /**
     * Construct a world with a defined world config
     *
     * @param config
     * @constructor
     */
    public World(config: WorldConfig)
    {
        this.config = config;

        // Make empty grid
        this.grid = new Array(config.width).fill(undefined)
            .map(() => new Array(config.height).fill(undefined));

        // Initialize active points
        this.activePoints = [];
        config.presetCells.forEach(cell =>
        {
            this.setPoint(cell.point, cell.status);
            this.activePoints.push(cell.point)
        });
    }

    /**
     * Get value of a point
     *
     * @param point
     * @return Status
     */
    private getPoint(point: Point): Status
    {
        let status = this.grid[point.x][point.y];
        return status == undefined ? World.defaultStatus : status;
    }

    /**
     * Set value of a point
     *
     * @param point
     * @param status
     */
    private setPoint(point: Point, status: Status)
    {
        this.grid[point.x][point.y] = status;
    }
}
