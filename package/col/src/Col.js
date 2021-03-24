{/* <template>
  <div
    class="c-col"
    :class="['c-col-' + span, getColOffsetClass, ...getColMediaClass]"
    :style="getColGutterStyle"
  >
    <slot></slot>
  </div>
</template> */}

export default {
  name: 'CCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    getColGutterStyle() {
      const gutter = this.$parent.gutter
      if (this.gutter === 0) return ''
      const value = gutter / 2 + 'px'
      return {
        paddingLeft: value,
        paddingRight: value,
      }
    },
    getColOffsetClass() {
      if (this.offset === 0) return ''
      return 'c-col-offset-' + this.offset
    },
    getColMediaClass() {
      let sizeArr = [];
      ['xs', 'xm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          sizeArr.push(`c-col-${size}-${this[size]}`)
        }
      })
      return sizeArr
    },
  },
  render: function (createElement) {
    return createElement(this.tag, {
      class: ['c-col', 'c-col-' + this.span, this.getColOffsetClass, ...this.getColMediaClass],
      style: this.getColGutterStyle
    }, this.$slots.default)
  },
}

{/* <style lang="scss">
@import '../../../asset/styles/components/row/Col.scss';
</style> */}