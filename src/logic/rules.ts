
export interface Rule
{
    selfStatus: Status
    conditions: Condition[]
    result: Status
}

export interface Condition
{
    operator: string
    aliveCount: number
}
