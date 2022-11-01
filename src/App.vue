<template>
    <div id="brain"></div>
    <p v-if="result">{{result[0]}} ({{Math.round(result[1] * 100) / 100}})</p>
    <CameraPixels v-on:change-colors="guess"></CameraPixels>
</template>

<script>
import {MyBrain} from "@/assets/js/MyBrain";
import CameraPixels from "@/components/CameraPixels";
import Normalizer from "@/assets/js/Normalizer";

export default {
    name: 'App',
    components: {
        CameraPixels
    },
    data() {
        return {
            brain: new MyBrain(),
            result: null
        }
    },
    created() {
        this.brain.train();

    },
    methods: {
        guess(colors) {
            this.result = this.brain.run(colors.map(c => Normalizer.colorNormalize(c)));

        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
