<template>
  <div class="demo-container">
    <c-container style="height: 100vh">
      <c-aside width="200px">Aside</c-aside>
      <c-container>
        <c-header>Header</c-header>
        <c-main>Main</c-main>
        <c-footer>Footer</c-footer>
      </c-container>
    </c-container>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
  mounted() {},
  data() {
    return {}
  },
  methods: {
    // doubleNum () {
    //   return this.num * 2
    // }
  },
  computed: {},
}
</script>

<style lang='scss'>
.c-header,
.c-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.c-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.c-main {
  background-color: #e9eef3;
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