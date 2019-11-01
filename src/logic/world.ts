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

interface Point
{
    x: number
    y: number
}

export default class World
{
    // Config
    config: WorldConfig;

    // Grid (grid[x][y] = grid state)
    grid: boolean[][];

    // Active points
    activePoints: Point[];

    /**
     * Constructor
     *
     * @param config Configuration
     * @constructor
     */
    public World(config: WorldConfig)
    {
        this.config = config;

        // Make empty grid
        this.grid = new Array(config.width).fill(0).map(() => new Array(config.height).fill(0));

        // Initialize active points
        this.activePoints = [];
        for (let point of config.points)
        {
            // Update value
            this.grid[point.x][point.y] = true;
            this.activePoints.push(point)
        }
    }
}
