import {Cell, Status} from "@/logic/world";

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

export default class Rules
{
    /**
     * Apply rules
     *
     * @param rules
     * @param nearby 9*9 points nearby
     */
    public static apply(rules: Rule[], nearby: Cell[][]): Status
    {
        // Loop through rules
        for (let rule of rules)
        {
            // A rule applies
            if (Rules.check(rule, nearby))
            {
                // Status becomes the result of the rule
                return rule.result;
            }
        }

        // Status unchanged
        return nearby[1][1].status;
    }

    /**
     * Check if a rule apply
     *
     * @param rule
     * @param nearby
     */
    public static check(rule: Rule, nearby: Cell[][]): boolean
    {
        // Check self status
        if (nearby[1][1].status !== rule.selfStatus) return false;

        // Count alive
        let aliveCount = nearby.flat().filter(c => c.status.alive).length - 1;

        // Apply conditions
        for (let condition of rule.conditions)
        {
            if (!this.checkCondition(condition, aliveCount))
            {
                return false;
            }
        }

        // All conditions passed
        return true;
    }

    /**
     * Apply a condition
     *
     * @param condition
     * @param aliveCount
     */
    private static checkCondition(condition: Condition, aliveCount: number): boolean
    {
        switch (condition.operator)
        {
            case '<': return aliveCount < condition.aliveCount;
            case '==': return aliveCount == condition.aliveCount;
            case '>': return aliveCount > condition.aliveCount;
            case '>=': return aliveCount >= condition.aliveCount;
            case '<=': return aliveCount <= condition.aliveCount;
        }

        throw Error('Condition unrecognized: ' + condition.operator);
    }

    /**
     * Conway rules
     */
    public static conway: Rule[] =
    [
        // Under population
        {
            selfStatus: {alive: true},
            conditions: [{operator: "<", aliveCount: 2}],
            result: {alive: false}
        },
        // Stay alive
        {
            selfStatus: {alive: true},
            conditions: [{operator: ">=", aliveCount: 2}, {operator: "<", aliveCount: 4}],
            result: {alive: true}
        },
        // Over population
        {
            selfStatus: {alive: true},
            conditions: [{operator: ">=", aliveCount: 4}],
            result: {alive: false}
        },
        // Reproduce
        {
            selfStatus: {alive: false},
            conditions: [{operator: "==", aliveCount: 3}],
            result: {alive: true}
        },
    ]
}
