<template lang="html">
  <div id="app">

    <div id="nav">
      <input type="text" class="name" value="Namaé"/>

      <div class="sum">
        <img :src="require('@/assets/images/coin.png')"/>
        <Counte :value="summary"/>
      </div>
    </div>


    <div id="table">

      <div class="thead">
        <span>#</span>
        <span v-for="day in daysOfWeek">
          <i class="day">{{ MOMENT(day).format('ddd') }}</i>
          {{ MOMENT(day).format('ll') }}
        </span>
      </div>

      <div class="tbody" v-for="obj in store">
        <div>******</div>
        <div v-for="day in daysOfWeek"></div>
      </div>

    </div>

    <!-- <Icon
      v-for="obj in store"
      :key="obj.id"
      :src="`images/${obj.picture}`"
      :rare="obj.rare"
    /> -->

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Counte from '@/components/Counture.vue'
import Icon from '@/components/Icon.vue'

@Component({
  components: {
    Icon,
    Counte
  }
})
export default class Application extends Vue {
  private summary = 971720

  get store () {
    const state = this.$store.state
    return state['SEA.ITEMS']
  }

  get daysOfWeek () {
    const moment = require('moment')
    const day = new Array()

    for (let i = 0; i < 7; i++)
      day.push(+moment().day(i))

    return day
  }
}
</script>
