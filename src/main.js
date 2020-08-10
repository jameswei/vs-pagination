import Vue from 'vue'
import App from './App.vue'
import VsPagination from '../dist/vs-pagination.common'

Vue.use(VsPagination)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
