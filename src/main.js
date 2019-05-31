import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './stylus/main.styl'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faTable, faCog, faCube, faTrash, faRandom, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faBlackTie, faGoogle, faTwitter, faStrava, faGooglePlus, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false
library.add(faUserSecret, faTable, faBlackTie, faCog, faCube, faFacebook, faGoogle, faTwitter, faTrash, faRandom, faHeart, faStrava, faGooglePlus, faLinkedin, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
