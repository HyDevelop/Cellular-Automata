export default class Timer
{
    private intervalId: number;
    private callback: TimerHandler;
    private delay: number;

    constructor(callback: TimerHandler, delay: number)
    {
        this.callback = callback;
        this.delay = delay;
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
}
