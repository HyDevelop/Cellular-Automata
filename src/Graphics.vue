<template>
    <div id="graphics">
        <div id="canvas-div">
            <canvas id="world-canvas"></canvas>
        </div>

        <div id="controls">
            <el-input v-model="inputDelay" type="number" @change="frameDelayTextbox">
                <template slot="prepend">Frame Delay: </template>
            </el-input>
            <el-button type="info" plain @click="updateButton">Update</el-button>
            <el-button v-if="timer != null" type="info" plain @click="toggle">
                {{timer.started ? 'Stop' : 'Start'}}
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Renderer from '@/logic/renderer';
    import World from '@/logic/world';
    import Rules from '@/logic/rules';
    import Presets from '@/logic/presets';
    import Timer from '@/logic/timer';

    @Component
    export default class Graphics extends Vue
    {
        renderer: Renderer;
        world: World;
        timer: Timer = null as unknown as Timer;

        inputDelay: number = 100;

        /**
         * This is called when the page finishes loading
         */
        mounted()
        {
            // Find canvas and create renderer
            let canvas = document.querySelector('#world-canvas');
            this.renderer = new Renderer(canvas);

            // Set frame
            this.renderer.setFrame(1000, 500);

            // Draw grid
            this.renderer.drawGrid();

            // Create world
            this.world = new World(
            {
                name: 'Test',
                width: 1000 / 10,
                height: 500 / 10,
                rules: Rules.conway,
                presetCells: new Presets({x: 50, y: 25}).R_PENTOMINO,
                onUpdate: cell => this.renderer.drawCell(cell)
            });

            // Create timer
            this.timer = new Timer(() => this.world.act(), 100);
        }

        /**
         * This is called when the update button is clicked
         */
        updateButton()
        {
            this.world.act()
        }

        toggle()
        {
            this.timer.toggle();
        }
    }
</script>

<style lang="scss" scoped>
    #graphics
    {
        // Alignment
        margin: 0 20px;
    }

    #world-canvas
    {
        width: 100%;
        height: 100%;

        // Dark background
        background: #000000;

        // Rounded corners
        border-radius: 10px;
    }

    #canvas-div
    {
        display: flex;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);

        // Alignment
        margin: 10px auto;
        max-width: 1200px;

        // Rounded corners
        border-radius: 10px;
    }

    #controls
    {
        // Alignment
        margin: 30px 10px 10px;
    }
</style>
