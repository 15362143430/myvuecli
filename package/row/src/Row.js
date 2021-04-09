export default {
  name: 'CRow',
  props: {
    gutter: { // 栅格间隔
      type: Number,
      default: 0,
    },
    type: String, // 布局模式，可选flex，现代浏览器下有效
    justify: { // flex布局下的水平排列方式
      type: String,
      default: 'start',
    },
    align: { // flex布局下的垂直排列方式
      type: String,
      default: 'top',
    },
    tag: { // 自定义元素标签（涉及到vue的render函数里的createElement）
      type: String,
      default: 'div', // 默认是div标签
    },
  },
  created() {
    console.log(this.$slots, this.$slots.default.length, 'slots') // 想看看$slot长啥样，你们可以忽略
  },
  computed: {
    getRowGutterStyle() { // 计算左右margin，配合gutter计算
      if (this.gutter === 0) return ''
      const value = this.gutter / 2 + 'px'
      return {
        marginLeft: value,
        marginRight: value,
      }
    },
    getRowFlexClass() { // 计算出flex布局的class是哪些
      return [
        { 'c-row-flex': this.type === 'flex' },
        this.justify === 'start' ? '' : `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ]
    },
  },
  render: function (createElement) { // 渲染dom的函数render
    return createElement(this.tag, { // 利用createElement创建dom
      class: [
        'c-row',
        { 'c-row-flex': this.type === 'flex' },
        this.justify === 'start' ? '' : `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ],
      style: this.getRowGutterStyle
    }, this.$slots.default)
  },
}