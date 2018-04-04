import Vue from 'vue'
import App from './App.vue'
import './register.js';
import store from '../vuex/store';

var app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})