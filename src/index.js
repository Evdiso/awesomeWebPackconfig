import './js/common'
import './assets/css/style.css'
import './assets/scss/style.scss'

window.Vue = require('vue');
import store from './store';
Vue.component('example', require('./components/example.vue').default);

const app = new Vue({
  data () {
    return {
      test: 'click button'
    }
  },
  methods: {
    clickBtn(str) {
      console.log(str);
    }
  },
  store,
  el: '#app'
})