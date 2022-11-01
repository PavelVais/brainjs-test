<template>
    <div class="container mx-auto max-width">
        <div class="grid grid-cols-2 gap-1 px-10 ">
            <div class="pixel rounded-tl-lg" :style="{'backgroundColor':this.colors[0]}">ahoj</div>
            <div class="pixel rounded-tr-lg" :style="{'backgroundColor':this.colors[1]}">ahoj</div>
            <div class="pixel rounded-bl-lg" :style="{'backgroundColor':this.colors[2]}">ahoj</div>
            <div class="pixel rounded-br-lg" :style="{'backgroundColor':this.colors[3]}">ahoj</div>
        </div>
        <button
            v-on:click="shuffleColors()"
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
            hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Shuffle
        </button>
    </div>
</template>

<script>
export default {
    name: 'CameraPixels',
    data() {
        return {
            colors: []
        }
    },
    mounted() {
        this.shuffleColors();
    },
    methods: {
        shuffleColors() {
            this.colors = [];
            for (let i = 0; i < 4; i++) {
                this.colors.push(this.randomGreyscaleColor());
            }
            this.$emit("change-colors",this.colors);
        },
        randomGreyscaleColor() {
            let v = (Math.random() * (256) | 0).toString(16);//bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
            return "#" + v + v + v;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pixel {
    width: 100%;
    height: 10rem;
    border: 1px solid #ffffff;
    display: block;
}
</style>
