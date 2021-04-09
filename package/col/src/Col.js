export default {
  name: 'CCol',
  props: {
    span: { // 栅格占据的列数
      type: Number,
      default: 24,
    },
    offset: { // 栅格左侧的间隔格数
      type: Number,
      default: 0,
    },
    // scss的for循环函数 + 媒体查询 可以实现以下效果
    xs: [Number, Object],// <768px 响应式栅格数或者栅格属性对象
    sm: [Number, Object],// ≥768px 响应式栅格数或者栅格属性对象
    md: [Number, Object],// ≥992px 响应式栅格数或者栅格属性对象
    lg: [Number, Object],// ≥1200px 响应式栅格数或者栅格属性对象
    xl: [Number, Object],// ≥1920px 响应式栅格数或者栅格属性对象
    tag: { // 自定义元素标签（涉及到vue的render函数里的createElement）
      type: String,
      default: 'div' // 默认是div标签
    }
  },
  computed: {
    getColGutterStyle() {
      const gutter = this.$parent.gutter // 因为el-row是包在el-row里的，所以想要计算每个栅格之间的间隔需要从外层的el-row获取gutter计算padding
      if (this.gutter === 0) return ''
      const value = gutter / 2 + 'px'
      return {
        paddingLeft: value,
        paddingRight: value,
      }
    },
    getColOffsetClass() { // 根据offset计算每一栅格向左的间隔
      if (this.offset === 0) return ''
      return 'c-col-offset-' + this.offset
    },
    getColMediaClass() { // 计算响应式的class
      let sizeArr = [];
      ['xs', 'xm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') { // 判断传进来了哪个响应式宽度，并计算出class名，保存在数组中
          sizeArr.push(`c-col-${size}-${this[size]}`)
        }
      })
      return sizeArr
    },
  },
  render: function (createElement) { // render函数渲染dom
    return createElement(this.tag, { // createElement函数创建dom
      class: ['c-col', 'c-col-' + this.span, this.getColOffsetClass, ...this.getColMediaClass], // 动态class绑定
      style: this.getColGutterStyle // 动态style绑定
    }, this.$slots.default) // 默认插槽
  },
}