<template lang="html">
  <div id="app">

    <div id="nav">
      <input type="text" class="name" value="NAMAEE - คุกกี้จัง"/>

      <div class="sum">
        <img :src="require('@/assets/images/coin.png')"/>
        <Counte :value="summary"/>
      </div>
    </div>


    <div id="table">

      <div class="thead">
        <span class="lf">item info</span>
        <span>quantity</span>
        <span class="rg">amount</span>
      </div>

      <div class="tbody" v-for="obj in store" v-if="obj.on">

        <div class="td-col">
          <div class="n-temp">
            <Icon
              :key="obj.id"
              :rare="obj.rare"
              :src="`images/${obj.picture}`"
            />
            <span class="temp">
              <h2>{{ obj.name }}</h2>
              <h3>{{ NUMERAL(obj.price).format('0,0') }}</h3>
            </span>
          </div>
        </div>

        <div class="td-col">
          <input
            type="text"
            v-model="obj.qty"
            @keyup="obj.qty = Number(obj.qty)"
            @focus="$event.target.select()"
          />
        </div>

        <div class="td-col">
          <Counte class="amo rg" :value="obj.price * obj.qty"/>
        </div>
      </div>

    </div>

  </div>
</template>


<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import Counte from '@/components/Counture/Index.vue'
import Icon from '@/components/Icon/Index.vue'

@Component({
  components: {
    Icon,
    Counte
  }
})
export default class Application extends Vue {
  // initial data
  private store = new Array
  private msg = 'null'

  constructor () {
    super()

    let state = JSON.parse(JSON.stringify(this.$store.state['SEA.ITEMS']))
    state = Object.keys(state).map(i => {
      state[i].qty = 0
      state[i].on = true

      return state[i]
    })

    this.store = state.sort((a: any, b: any) => {
      a = a['price']
      b = b['price']
      return (a === b ? 0 : a > b ? 1 : -1)
    })

    this.orderBy('price')
  }

  // lifecycle hook
  mounted () {
    const $t = this
    window.addEventListener('keyup', event => {
      if (event.key === 'F9' || event.keyCode === 120) {
        
        $t.store.forEach((obj: any) => {
          if (!obj.qty) obj.on = false
        })

        $t.store = $t.store.sort((a: any, b: any) => {
          a = a['qty']
          b = b['qty']
          return (a === b ? 0 : a > b ? -1 : 1)
        })

      }


      if (event.key === 'Home' || event.keyCode === 36) {
        
        $t.store.forEach((obj: any) => {
          if (!obj.qty) obj.on = true
        })

        $t.store = $t.store.sort((a: any, b: any) => {
          a = a['price']
          b = b['price']
          return (a === b ? 0 : a > b ? 1 : -1)
        })

      }
    }, false)
  }

  // computed
  get daysOfWeek () {
    const moment = require('moment')
    const day = new Array()

    for (let i = 0; i < 7; i++)
      day.push(+moment().day(i))

    return day
  }

  // computed
  get summary () {
    let result = 0
    this.store.forEach((obj: any) => {
      result += (
        obj.price * Number(obj.qty)
      )
    })

    return result
  }
 
  // methods
  orderBy (field: any) {
    console.log(this.msg)
  }
}
</script>
