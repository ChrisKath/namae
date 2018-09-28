<template lang="html">
  <div id="app">

    <!-- <Icon
      v-for="item in ITEMS"
      :key="item.id"
      :src="`images/${item.picture}`"
      :rare="item.rare"
    /> -->


    <div id="demo">
      <input type="number" v-model="demo" />

      <Counted :value="demo"/>
    </div>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Counted from '@/components/Counture.vue'
import Icon from '@/components/Icon.vue'

@Component({
  components: {
    Icon,
    Counted
  }
})
export default class Application extends Vue {

  private demo = 0

  get ITEMS () {
    const state = this.$store.state
    return state['SEA.ITEMS']
  }

}
</script>


<style lang="less">

  #app {
    padding: 20px;
  }

  #demo {
    input {
      margin-bottom: 15px;
      padding: 10px 15px;
      border-radius: 2px;
      border: solid 1px #EBEDEF
    }

    span {
      color: #2D8CF0;
      font-size: 18px;
      font-weight: 700;
    }
  }

</style>
