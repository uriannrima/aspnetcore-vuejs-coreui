import './css/site.css'
import './css/coreui.scss'

import 'core-js/es6/promise'
import 'core-js/es6/array'
import 'core-js/es6/string'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { app } from './app'

app.$mount('#app')
