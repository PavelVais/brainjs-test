<template>
    <div id="brain"></div>
    <p v-if="result">{{ result[0] }} ({{ Math.round(result[1] * 100) / 100 }})</p>
    <CameraPixels v-on:change-colors="guess"></CameraPixels>
    <button
        v-on:click="shuffleColors()"
        class="pl-3 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Shuffle
    </button>
    <button
        v-on:click="learnNew('horizontal')"
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Horizontal
    </button>
    <button
        v-on:click="learnNew('horizontal')"
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Vertical
    </button>
    <button
        v-on:click="learnNew('diagonal')"
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Diagonal
    </button>
    <button
        v-on:click="learnNew('empty')"
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Empty
    </button>
    <button
        v-on:click="learnNew('full')"
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Full
    </button>
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
            result: null,
            colors: []
        }
    },
    created() {
        this.brain.train();

    },
    methods: {
        guess(colors) {
            this.colors = colors;
            this.result = this.brain.run(colors.map(c => Normalizer.colorNormalize(c)));
        },
        learnNew(type) {
            this.brain.learn(this.colors.map(c => Normalizer.colorNormalize(c)),type);
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
