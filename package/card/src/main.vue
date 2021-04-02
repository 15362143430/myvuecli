<template>
  <div
    class="c-card"
    :class="shadow ? `is-${shadow}-shadow` : 'is-always-shadow'"
  >
    <div class="c-card_header" v-if="$slot.header || header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="c-card_body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",
  props: {
    header,
    bodyStyle,
    shadow: String,
  },
};
</script>

<style lang="stylus" scoped></style>