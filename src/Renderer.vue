<template>
    <div id="renderer">
        <canvas id="world-canvas"></canvas>
    </div>
</template>

<script lang="ts">
    import {Vue} from "vue-property-decorator";

    export default class Renderer extends Vue
    {

    }
</script>

<style scoped>
    #world-canvas
    {
        width: 100%;
        height: 100%;
    }
</style>
