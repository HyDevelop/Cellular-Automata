import Rules, {Rule} from '@/logic/rules';

/**
 * Config of a world
 */
export interface WorldConfig
{
    // Meta information
    name: string
    width: number
    height: number
    rules: Rule[]
    presetCells: Cell[]
    onUpdate: ((cell: Cell) => void) | undefined
}

/**
 * A point contains a x coordinate and a y coordinate.
 */
export interface Point
{
    x: number
    y: number
}

/**
 * Status of a cell. Currently is either dead or alive.
 */
export interface Status
{
    alive: boolean
}

/**
 * A Cell contains its coordinates and its status
 */
export interface Cell
{
    point: Point
    status: Status
}

// Those constants are for memory optimizations
export const STATUS_ALIVE: Status = {alive: true};
export const STATUS_DEAD: Status = {alive: false};

export default class World
{
    // Default status
    private static defaultStatus: Status = {alive: false};

    // Config
    config: WorldConfig;

    // Grid (grid[x][y] = grid state)
    grid: Cell[][];

    // Active points (Undefined = no cell)
    activePoints: Point[];

    /**
     * Construct a world with a defined world config
     *
     * @param config
     */
    constructor(config: WorldConfig)
    {
        this.config = config;

        // Make empty grid
        this.grid = new Array(config.width).fill(undefined)
            .map(() => new Array(config.height).fill(undefined));

        // Initialize active points
        this.activePoints = [];
        config.presetCells.forEach(cell =>
        {
            this.setCellStatus(cell.point, cell.status);
            this.activePoints.push(cell.point);
        });
    }

    /**
     * Get value of a point
     *
     * @param point
     * @return Cell
     */
    private getCell(point: Point): Cell
    {
        let cell = this.grid[point.x][point.y];

        // If null, give the point a unique value
        return cell != undefined ? cell
            : this.grid[point.x][point.y] = {point: point, status: World.defaultStatus};
    }

    /**
     * Set value of a point
     *
     * @param point
     * @param status
     */
    private setCellStatus(point: Point, status: Status)
    {
        // Get cell
        let cell = this.getCell(point);

        // Update cell status
        cell.status = status.alive ? STATUS_ALIVE : STATUS_DEAD;

        // Callback
        if (this.config.onUpdate != null)
        {
            this.config.onUpdate(cell);
        }
    }

    /**
     * Update alive points
     */
    private updateActivePoints()
    {
        // Filter all of the alive points from previous active points
        let alivePoints = this.activePoints.filter(point => this.getCell(point).status.alive);

        // Put nearby points in.
        alivePoints = alivePoints.flatMap(point => this.getNearbyCells(point).flat().map(cell => cell.point));

        // Only unique values
        this.activePoints = [...new Set(alivePoints)];
    }

    /**
     * Get nearby 9*9 cells
     *
     * @param point Point in the center
     */
    private getNearbyCells(point: Point): Cell[][]
    {
        let result: Cell[][] = [];

        // Loop through 9*9
        for (let x = point.x - 1; x <= point.x + 1; x++)
        {
            let row = [];

            for (let y = point.y - 1; y <= point.y + 1; y++)
            {
                // Wrap coordinates around width and height
                row.push(this.getCell({x: x % this.config.width, y: y % this.config.height}))
            }

            // Add row to result
            result.push(row);
        }

        return result;
    }

    /**
     * Update frame
     */
    public act()
    {
        this.updateActivePoints();

        // Loop through active points
        for (let point of this.activePoints)
        {
            // Get new status
            let newStatus = Rules.apply(this.config.rules, this.getNearbyCells(point));

            // Set new status
            this.setCellStatus(point, newStatus);

            // Add active point
            this.activePoints.push(point);
        }
    }
}
