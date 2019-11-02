<template>
    <div id="graphics">
        <canvas id="world-canvas"></canvas>
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

            // Test
            this.renderer.drawRect('red', {x: 0, y: 0, xLen: 10, yLen: 10})
        }
    }
</script>

<style scoped>
    #world-canvas
    {
        width: 100%;
        height: 100%;
    }
</style>
