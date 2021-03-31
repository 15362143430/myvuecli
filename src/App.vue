<template>
  <div id="app">
    <div class="demo-container">
      <c-tag />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created() {},
  mounted() {},
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    add() {
      this.num += 1
    },
    // doubleNum () {
    //   return this.num * 2
    // }
  },
  computed: {
    doubleNum() {
      return this.num * 2
    },
  },
}
</script>

<style lang='scss'>
// @import './asset/styles/rem.sass';
#app {
  font-family: 'Avenir', Hcvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothings: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>