import CMain from './src/main.vue'

CMain.install = function (Vue) { 
    Vue.component(CMain.name, CMain)
 }

 export default CMain