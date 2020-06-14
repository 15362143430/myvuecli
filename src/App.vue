<template>
  <div class="demo-button">
    <div class="l-row">
      <l-button>默认按钮</l-button>
      <l-button type="primary">主要按钮</l-button>
      <l-button type="success">成功按钮</l-button>
      <l-button type="info">信息按钮</l-button>
      <l-button type="warning">警告按钮</l-button>
      <l-button type="danger">危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button plain>默认按钮</l-button>
      <l-button type="primary" plain>主要按钮</l-button>
      <l-button type="success" plain>成功按钮</l-button>
      <l-button type="info" plain>信息按钮</l-button>
      <l-button type="warning" plain>警告按钮</l-button>
      <l-button type="danger" plain>危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button round>默认按钮</l-button>
      <l-button type="primary" round>主要按钮</l-button>
      <l-button type="success" round>成功按钮</l-button>
      <l-button type="info" round>信息按钮</l-button>
      <l-button type="warning" round>警告按钮</l-button>
      <l-button type="danger" round>危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button round>默认按钮</l-button>
      <l-button type="primary" plain round>主要按钮</l-button>
      <l-button type="success" plain round>成功按钮</l-button>
      <l-button type="info" plain round>信息按钮</l-button>
      <l-button type="warning" plain round>警告按钮</l-button>
      <l-button type="danger" plain round>危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button circle>默</l-button>
      <l-button type="primary" plain circle></l-button>
      <l-button type="success" plain circle></l-button>
      <l-button type="info" plain circle></l-button>
      <l-button type="warning" plain circle></l-button>
      <l-button type="danger" plain circle></l-button>
    </div>
    <div class="l-row">
      <l-button disabled>默认按钮</l-button>
      <l-button type="primary" disabled>主要按钮</l-button>
      <l-button type="success" disabled>成功按钮</l-button>
      <l-button type="info" disabled>信息按钮</l-button>
      <l-button type="warning" disabled>警告按钮</l-button>
      <l-button type="danger" disabled>危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button plain disabled>默认按钮</l-button>
      <l-button type="primary" plain disabled>主要按钮</l-button>
      <l-button type="success" plain disabled>成功按钮</l-button>
      <l-button type="info" plain disabled>信息按钮</l-button>
      <l-button type="warning" plain disabled>警告按钮</l-button>
      <l-button type="danger" plain disabled>危险按钮</l-button>
    </div>
    <div class="l-row">
      <l-button type='text'>默认按钮</l-button>
      <l-button type='text' disabled>默认按钮</l-button>
    </div>
    <div class="l-row">
      <l-button-group>
        <l-button icon='l-icon-arrow-left' type="primary">上一页</l-button>
        <l-button type="primary">下一页<i class="l-icon-arrow-right l-icon--right"></i></l-button>
      </l-button-group>
      <l-button-group>
        <l-button type="primary">主要按钮</l-button>
        <l-button type="info">信息按钮</l-button>
        <l-button type="success">成功按钮</l-button>
      </l-button-group>
    </div>
    <div class="l-row">
      <l-button loading>默认按钮</l-button>
      <l-button type='primary' loading>默认按钮</l-button>
      <l-button type='primary' loading plain>默认按钮</l-button>
    </div>
    <div class="l-row">
      <l-button>默认按钮</l-button>
      <l-button size='medium'>默认按钮</l-button>
      <l-button size=small>默认按钮</l-button>
      <l-button size='mini'>默认按钮</l-button>
    </div>
  </div>
</template>

<script>
import img from "./asset/images/haha.jpg";
import "./asset/styles/test.css";
import "./asset/styles/global.stylus";
import LButton from "./components/button/src/Button";
import LButtonGroup from './components/button/src/ButtonGroup'
// import Button
export default {
  name: "App",
  components: {
    LButton,
    LButtonGroup
  },
  created() {
    console.log(img);
  },
  data() {
    return {
      list: [
        { name: "lin" },
        { name: "lin" },
        { name: "lin" },
        { name: "lin" },
        { name: "lin" }
      ]
    };
  },
  methods: {
    add() {
      this.list.push({ name: "k" });
    }
  }
};
</script>

<style lang='less'>
div {
  #a {
    font-size: 30px;
  }
}

.demo-box.demo-button .l-button + .l-button {
  margin-left: 10px;
}
.l-row{
  margin-bottom: 20px;
}
</style>