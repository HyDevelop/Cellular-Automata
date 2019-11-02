<template>
    <div id="graphics">
        <div id="canvas-div">
            <canvas id="world-canvas"></canvas>
        </div>

        <el-button type="primary" plain>Update</el-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Renderer from '@/logic/renderer';

    @Component
    export default class Graphics extends Vue
    {
        renderer: Renderer;

        mounted()
        {
            // Find canvas and create renderer
            let canvas = document.querySelector('#world-canvas');
            this.renderer = new Renderer(canvas);

            // Set frame
            this.renderer.setFrame(1000, 500);

            // Draw grid
            this.renderer.drawGrid();
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
</style>
