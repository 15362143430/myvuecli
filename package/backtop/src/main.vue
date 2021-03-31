<template>
  <div>
    <transition name="c-fade-in">
      <div
        v-if="visible"
        @click.stop="handleClick"
        :style="{ right: styleRight, bottom: styleBottom }"
        class="c-backtop"
      >
        <slot>
          <el-icon name="caret-top"></el-icon>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
const cubic = (value) => Math.pow(value, 3);
const easeInOutCubic = (value) =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
export default {
  name: "CBacktop",
  props: {
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    target: String,
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
  },
  data() {
    return {
      el: null,
      container: null,
      visible: false,
    };
  },
  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    },
  },
  mounted() {},
  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`找不到这个元素：${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      this.visible = this.el.scrollTop >= this.visibilityHeight;
    },
    handleClick(e) {
      this.scrollToTop();
      this.$emit("click", e);
    },
    scrollToTop() {
      const el = this.el;
      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    },
  },
  //   render(createElement) {
  //     return createElement("button", {
  //       on: {
  //         click: () => {},
  //       },
  //     });
  //   },
};
</script>