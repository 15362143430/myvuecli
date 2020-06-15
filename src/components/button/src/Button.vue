<template>
  <button
   type="button" 
   class="l-button" 
   :disabled='disabled || loading'
   :class='[
        "l-button--"+type,
        size?"l-button--"+size:"",
        {
            "is-plain":plain,
            "is-round":round,
            "is-circle":circle,
            "is-disabled":disabled,
            "is-loading":loading
        }
   ]'>

   <i class="l-icon-loading" v-if='loading'></i>
   <i :class="icon" v-if='icon && !loading'></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    icon:{
      type:String,
      default:''
    },
    plain:Boolean,
    round:Boolean,
    circle:Boolean,
    loading:Boolean,
    disabled:Boolean,
    size:String
  }
};
</script>

<style lang='less' scoped>
@import '../../../asset/styles/components/button/Button.less';
@import '../../../asset/styles/components/button/icon.less';
</style>