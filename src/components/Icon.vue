<template lang="html">
  <div id="n-icon">

    <div class="bob" :class="borderColor"></div>
    <div class="img" :style="bgImage"></div>

  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop(String) src!: string
  @Prop(Number) size!: number
  @Prop({ default: false }) rare!: boolean

  get borderColor () {
    return this.rare ? 'gold' : 'blue'
  }

  get bgImage () {
    const path = require(`@/assets/${this.src}`)
    return {
      backgroundImage: `url(${path})`,
      backgroundSize: `${this.size || 32}px`
    }
  }
}
</script>


<style lang="less">
#n-icon {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background-color: #0B0D0E;
  border: solid 3px #283747;

  .bob {
    position: absolute;
    z-index: 1;
    top: -1px;
    right: -1px;
    width: 12px;
    height: 12px;
    border-radius: 100%;

    &.gold {
      background-image: linear-gradient(120deg, #F6D365 0%, #FDA085 100%);
    }

    &.blue {
      background-image: linear-gradient(120deg, #00F2FE 0%, #4FACFE 100%);
    }
  }

  .img {
    display: block;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>

