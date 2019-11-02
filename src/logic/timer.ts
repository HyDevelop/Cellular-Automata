export default class Timer
{
    private intervalId: number = -1;
    private callback: TimerHandler;
    private delay: number;

    constructor(callback: TimerHandler, delay: number)
    {
        this.callback = callback;
        this.delay = delay;
    }

    /**
     * Set delay
     *
     * @param delay
     */
    public setDelay(delay: number)
    {
        this.delay = delay;
        this.restart();
    }

    /**
     * Start the timer
     */
    public start()
    {
        this.intervalId = setInterval(this.callback, this.delay);
    }

    /**
     * Stop the timer
     */
    public stop()
    {
        clearInterval(this.intervalId);
        this.intervalId = -1;
    }

    /**
     * Restart the timer
     */
    public restart()
    {
        this.stop();
        this.start();
    }

    /**
     * Started or not
     */
    get started()
    {
        return this.intervalId != -1;
    }
}
