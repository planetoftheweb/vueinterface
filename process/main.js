import './assets/style.css';
import './assets/data.json';

import _ from 'lodash';
import moment from 'moment';

import Vue from 'vue';
import App from './App.vue';


console.log(moment(new Date()).format());



var vm = new Vue({
  el: '#app',
  render: h => h(App)
})
