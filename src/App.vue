<template>
  <div id="app">
    <div class="demo-container">
      <c-container>
        <c-header>sss</c-header>
      </c-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created() {},
  mounted () {
    console.log(this.$slots)
  },
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
 .c-header, .c-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .c-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .c-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .c-container {
    margin-bottom: 40px;
  }
  
  .c-container:nth-child(5) .c-aside,
  .c-container:nth-child(6) .c-aside {
    line-height: 260px;
  }
  
  .c-container:nth-child(7) .c-aside {
    line-height: 320px;
  }
</style>