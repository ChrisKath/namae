import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Icon extends Vue {

  @Prop(String) src! : string
  @Prop(Number) size!: number
  @Prop({ default: false }) rare!: boolean


  get bdColor (): string {
    return this.rare ? 'gold' : 'blue'
  }


  get bgImage (): object {
    const path = require(`@/assets/${this.src}`)
    return {
      backgroundImage: `url(${path})`,
      backgroundSize: `${this.size || 32}px`
    }
  }

}