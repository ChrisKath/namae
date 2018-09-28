<template lang="html">
  <Countup
    :startVal="startVal"
    :endVal="endVal"
    :options="options"
  />
</template>


<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import Countup from 'vue-countup-v2'
import numeral from 'numeral'

@Component({
  components: {
    Countup
  }
})
export default class Counture extends Vue {

  private startVal = 0
  private endVal = 0
  private options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
  }

  Int (val: any) {
    return Number(numeral(val).format('0.0'))
  }

  @Prop([Number, String]) value!: any

  @Watch('value')
    onValue (newValue: number, oldValue: number) {
      this.startVal = this.Int(oldValue)
      this.endVal = this.Int(newValue)
    }
}
</script>

