import Vue from 'vue';

import App from './App.vue'
import "../package/styles/reset.css";
import '../package/styles/index.scss' // 引入总样式
import { CButton, CButtonGroup, CRow, CCol, CContainer, 
    CHeader, CFooter, CAside, CMain, CBacktop, CCard } from '../package/index'
Vue.use(CButton)
Vue.use(CButtonGroup)
Vue.use(CRow)
Vue.use(CCol)
Vue.use(CContainer)
Vue.use(CHeader)
Vue.use(CFooter)
Vue.use(CAside)
Vue.use(CMain)
Vue.use(CBacktop)
Vue.use(CCard)

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})