import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from 'vue-dragscroll'
Vue.use(VueDragscroll)

import VueResource from 'vue-resource';

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')