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
        if (this.started) stop();
        this.intervalId = setInterval(this.callback, this.delay);
    }

    /**
     * Stop the timer
     */
    public stop()
    {
        if (!this.started) return;

        clearInterval(this.intervalId);
        this.intervalId = -1;
    }

    /**
     * Restart the timer
     */
    public restart()
    {
        if (!this.started) return;

        this.stop();
        this.start();
    }

    /**
     * Toggle start / stop states
     */
    public toggle()
    {
        if (this.started) this.stop();
        else this.start();
    }

    /**
     * Started or not
     */
    get started()
    {
        return this.intervalId != -1;
    }
}
