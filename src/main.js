import Vue from 'vue';

import App from './App.vue'
import "../package/styles/reset.css";
import '../package/styles/index.scss'
import { CButton, CButtonGroup, CRow, CCol, CContainer, CHeader } from '../package/index'
Vue.use(CButton)
Vue.use(CButtonGroup)
Vue.use(CRow)
Vue.use(CCol)
Vue.use(CContainer)
Vue.use(CHeader)

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})