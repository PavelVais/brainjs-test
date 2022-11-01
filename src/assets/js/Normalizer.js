export default {
    colorNormalize: function (color) {
        return parseInt(color.substring(1, 3), 16) / 255;
    }
}