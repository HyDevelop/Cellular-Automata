<template>
    <div id="graphics">
        <div id="canvas-div">
            <canvas id="world-canvas"></canvas>
        </div>

        <div id="controls">
            <el-button type="info" plain>Update</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Renderer from '@/logic/renderer';
    import World from "@/logic/world";
    import Rules from '@/logic/rules';
    import Presets from '@/logic/presets';

    @Component
    export default class Graphics extends Vue
    {
        renderer: Renderer;
        world: World;

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
                width: 1000,
                height: 500,
                rules: Rules.conway,
                presetCells: new Presets({x: 500, y: 250}).R_PENTOMINO,
                onUpdate: cell => this.renderer.drawCell(cell)
            })
        }
    }
</script>

<style lang="scss" scoped>
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
        margin: 10px;
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
