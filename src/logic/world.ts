interface WorldConfig
{
    // Meta information
    name: string
    width: number
    height: number
    rules: any
    states: any
    points: Point[]
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

export default class World
{
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
        for (let point of config.points)
        {
            // Update value
            this.setPoint(point, {alive: true});
            this.activePoints.push(point)
        }
    }

    /**
     * Get value of a point
     *
     * @param point
     * @return Status
     */
    private getPoint(point: Point): Status
    {
        return this.grid[point.x][point.y];
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
