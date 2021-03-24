import CHeader from './src/main.vue'

CHeader.install = function (Vue) {
    Vue.component(CHeader.name, CHeader)
}

export default CHeader
