<template lang="html">
  <div id="n-icon" :class="borderColor">

    <div class="img" :style="bgImage"></div>

  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  constructor() {
    super()

    console.info('🔌 [Icon] componentDidMount...')
  }


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
      backgroundSize: `${this.size || 40}px`
    }
  }
}
</script>


<style lang="less">

  #n-icon {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    background-color: #1A1A1A;
    border: solid 2px transparent;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.34);

    .img {
      display: block;
      height: 100%;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &.gold {
      border-color: #E6BF00;
    }

    &.blue {
      border-color: #80BAFB;
    }
  }

</style>

