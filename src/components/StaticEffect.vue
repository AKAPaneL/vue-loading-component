<template>
    <span class="loading-container" :class="{'has_border':hasBorder}" v-if="visible">
        <svg viewBox="25 25 50 50" class="loading__circular">
            <circle cx="50" cy="50" r="13" fill="none"></circle>
        </svg>
    </span>
</template>
<script>
export default {
  props: {
    hasBorder: {
      type: Boolean
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      console.log(1)
    })
  }
}
</script>
<style scoped>
.loading-container{
    border-radius: 50%;
    display: inline-block;
    height: 13.333vw;
    width: 13.333vw;
    animation: span-rotate 1.7s linear infinite;
}
.has_border{
    background-color: #fff;
    box-shadow: 0vw 0vw 2.133vw  #cccccc;
}
.loading__circular {
    /* display: block; */
    width: 13.333vw;
    height: 13.333vw;
    color: rgb(220, 18, 99);
}
.loading__circular circle {
    animation: circular 1.2s ease-in-out infinite;
    stroke: currentColor;
    stroke-width: 4;
    stroke-linecap: round;
}
@keyframes span-rotate {
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes circular {
    0%{
        stroke-dasharray: 1, 120;
        stroke-dashoffset: 0;
    }
    50%{
        stroke-dasharray: 60, 120;
        stroke-dashoffset: -30;
    }
    100%{
        stroke-dasharray: 60, 120;
        stroke-dashoffset: -80;
    }
}
</style>
