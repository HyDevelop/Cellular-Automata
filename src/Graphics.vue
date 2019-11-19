<template>
    <div id="graphics">
        <div id="canvas-div">
            <canvas id="world-canvas"></canvas>
        </div>

        <div id="controls">
            <el-button type="info" plain @click="updateButton">Update</el-button>
            <el-button v-if="timer != null" type="info" plain @click="toggle">
                {{timer.started ? 'Stop' : 'Start'}}
            </el-button>
            <el-button type="info" plain @click="clearScreen">
                Clear Screen
            </el-button>

            <div style="display: inline-block; width: 200px; margin: 0 10px 0 10px">
                <el-input v-model="inputDelay" @change="frameDelayTextbox" type="number"
                          id="input-delay">
                    <template slot="prepend">Frame Delay: </template>
                </el-input>
            </div>

            <el-button type="info" plain @click="saveLoad">
                Save/Load
            </el-button>

            <el-dialog
                title="Save / Load"
                :visible.sync="saveLoadShow"
                width="80%">
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="Please input"
                    v-model="saveLoadText"
                    id="save-load-code">
                </el-input>
                <span slot="footer" class="dialog-footer">
                    <el-button class="btn" data-clipboard-target="#save-load-code">Copy</el-button>
                    <el-button @click="load">Load</el-button>
                </span>
            </el-dialog>
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
    import ClipboardJS from 'clipboard';

    @Component
    export default class Graphics extends Vue
    {
        renderer: Renderer;
        world: World;
        timer: Timer = null as unknown as Timer;

        inputDelay: number = 100;
        saveLoadText: string = '';
        saveLoadShow: boolean = false;

        /**
         * This is called when the page finishes loading
         */
        mounted()
        {
            // Find canvas and create renderer
            let nullableCanvas = document.querySelector('#world-canvas');
            if (nullableCanvas == null) return;
            let canvas: any = nullableCanvas;
            this.renderer = new Renderer(canvas);

            // Set frame
            this.renderer.setFrame(1000, 500);

            // Draw grid
            this.renderer.drawGrid();

            // Create world
            this.world = new World(
            {
                name: 'Test',
                width: 1000 / 5,
                height: 500 / 5,
                rules: Rules.conway,
                presetCells: new Presets({x: 1000 / 5 / 2, y: 500 / 5 / 2}).CELLULAR_AUTOMATA,
                onUpdate: cell => this.renderer.drawCell(cell)
            });

            // Create timer
            this.timer = new Timer(() => this.world.act(), this.inputDelay);

            //Register copy/paste button
            new ClipboardJS('.btn');

            // Set click listener
            canvas.addEventListener('click', (event: any) =>
            {
                let x = event.pageX - canvas.offsetLeft;
                let y = event.pageY - canvas.offsetTop;

                console.log(x + ', ' + y);

                // Get the current state of the cell
                //@ts-ignore
                let point = {x: Math.floor(x / 5 / canvas.offsetWidth * 1000), y: Math.floor(y / 5 / canvas.offsetHeight * 500)};
                let cell = this.world.getCell(point);
                this.world.setCellStatus(point, {alive: !cell.status.alive});
                this.world.activePoints.push(point);
            });
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

        frameDelayTextbox()
        {
            this.timer.setDelay(this.inputDelay)
        }

        clearScreen()
        {
            console.log("Hi");
            this.world.clearGrid();
        }

        saveLoad()
        {
            this.saveLoadShow = true;
            this.saveLoadText = this.world.serializeWorld();
        }

        load()
        {
            this.world.loadWorld(this.saveLoadText);
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

    #input-delay
    {
        width: 150px;
        margin: 0 10px 0 0;
    }
</style>
