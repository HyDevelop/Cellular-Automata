<template>
    <div id="graphics">
        <canvas id="world-canvas"></canvas>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator';

    export default class Graphics extends Vue
    {
        canvas: any;
        c: any;

        created()
        {
            // Find canvas and create context
            this.canvas = document.querySelector('#world-canvas');
            this.c = this.canvas.getContext('2d');
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
