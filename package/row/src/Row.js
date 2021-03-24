{/* <template>
  <div class="c-row" :style="getRowGutterStyle" :class="getRowFlexClass">
    <slot></slot>
  </div>
</template> */}

export default {
  name: 'CRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  created() {
    console.log(this.$slots, this.$slots.default.length, 'slots')
  },
  computed: {
    getRowGutterStyle() {
      if (this.gutter === 0) return ''
      const value = this.gutter / 2 + 'px'
      return {
        marginLeft: value,
        marginRight: value,
      }
    },
    getRowFlexClass() {
      return [
        { 'c-row-flex': this.type === 'flex' },
        this.justify === 'start' ? '' : `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ]
    },
  },
  render: function (createElement) {
    return createElement(this.tag, {
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

{/* <style lang="scss">
@import '../../../asset/styles/components/row/Row.sass';
</style> */}