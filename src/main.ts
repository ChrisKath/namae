import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'


/**
 * Include dependencies modules.
 */
import moment from 'moment'
import numeral from 'numeral'


/**
 * Include less global style.
 */
import '@/assets/style/app.less'


/**
 * Vue instance config.
 */
Vue.prototype.MOMENT = moment
Vue.prototype.NUMERAL = numeral
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false


/**
 * Vue instance.
 */
new Vue({
  name: '@Cookié Chan',
  store,
  render: h => h(App)
}).$mount('#app')
