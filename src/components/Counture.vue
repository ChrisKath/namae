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

  @Prop([Number, String]) value!: any

  private startVal = 0
  private endVal = this.value
  private options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
  }

  @Watch('value')
    onValue (newValue: number, oldValue: number) {
      this.startVal = Number(numeral(oldValue).format('0.0'))
      this.endVal = Number(numeral(newValue).format('0.0'))
    }
}
</script>

