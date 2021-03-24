import CContainer from './src/main.vue'

CContainer.install = function (Vue) {
    Vue.component(CContainer.name, CContainer)
}

export default CContainer
