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
    }
