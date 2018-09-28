<template lang="html">
  <div id="app">

    <Icon
      v-for="item in ITEMS"
      :key="item.id"
      :src="`images/${item.picture}`"
      :rare="item.rare"
    />

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class Application extends Vue {

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

</style>
