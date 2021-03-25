<script>
export default {
    name: 'CTag',
  porps: {
    type: String,
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: "light",
      validator: () => {
        return ["dark", "light", "plain"].indexOf(val) !== -1;
      },
    },
  },
  methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const { type, size, hit, effect } = this;
      const classes = [
        'c-tag',
        type ? `c-tag--${type}` : '',
        size ? `c-tag--${size}` : '',
        effect ? `c-tag--${effect}` : '',
        hit && 'is-hit'
      ];
      const tag = (
        <span
          class={ classes }
          style={{ backgroundColor: this.color }}
          on-click={ this.handleClick }>
          { this.$slots.default }
          {
            this.closable && <i class="c-tag__close c-icon-close" on-click={ this.handleClose }></i>
          }
        </span>
      );

      return this.disableTransitions ? tag : <transition name="c-zoom-in-center">{ tag }</transition>;
    }
};
</script>