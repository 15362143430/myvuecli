<template>
  <div class="demo-button">
    <div class="l-row">
      <c-button nativeType="button" @click="buttonMethods">默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button plain>默认按钮</c-button>
      <c-button type="primary" plain>主要按钮</c-button>
      <c-button type="success" plain>成功按钮</c-button>
      <c-button type="info" plain>信息按钮</c-button>
      <c-button type="warning" plain>警告按钮</c-button>
      <c-button type="danger" plain>危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button round>默认按钮</c-button>
      <c-button type="primary" round>主要按钮</c-button>
      <c-button type="success" round>成功按钮</c-button>
      <c-button type="info" round>信息按钮</c-button>
      <c-button type="warning" round>警告按钮</c-button>
      <c-button type="danger" round>危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button round>默认按钮</c-button>
      <c-button type="primary" plain round>主要按钮</c-button>
      <c-button type="success" plain round>成功按钮</c-button>
      <c-button type="info" plain round>信息按钮</c-button>
      <c-button type="warning" plain round>警告按钮</c-button>
      <c-button type="danger" plain round>危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button circle icon='l-icon-search'></c-button>
      <c-button type="primary" plain circle  icon='l-icon-share'></c-button>
    </div>
    <div class="l-row">
      <c-button disabled>默认按钮</c-button>
      <c-button type="primary" disabled>主要按钮</c-button>
      <c-button type="success" disabled>成功按钮</c-button>
      <c-button type="info" disabled>信息按钮</c-button>
      <c-button type="warning" disabled>警告按钮</c-button>
      <c-button type="danger" disabled>危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button plain disabled>默认按钮</c-button>
      <c-button type="primary" plain disabled>主要按钮</c-button>
      <c-button type="success" plain disabled>成功按钮</c-button>
      <c-button type="info" plain disabled>信息按钮</c-button>
      <c-button type="warning" plain disabled>警告按钮</c-button>
      <c-button type="danger" plain disabled>危险按钮</c-button>
    </div>
    <div class="l-row">
      <c-button type='text'>默认按钮</c-button>
      <c-button type='text' disabled>默认按钮</c-button>
    </div>
    <div class="l-row">
      <c-button-group>
        <c-button icon='l-icon-arrow-left' type="primary">上一页</c-button>
        <c-button type="primary">下一页<i class="l-icon-arrow-right l-icon--right"></i></c-button>
      </c-button-group>
      <c-button-group>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="success">成功按钮</c-button>
      </c-button-group>
    </div>
    <div class="l-row">
      <c-button loading>默认按钮</c-button>
      <c-button type='primary' loading>默认按钮</c-button>
      <c-button type='primary' loading plain>默认按钮</c-button>
    </div>
    <div class="l-row">
      <c-button>默认按钮</c-button>
      <c-button size='medium'>默认按钮</c-button>
      <c-button size=small>默认按钮</c-button>
      <c-button size='mini'>默认按钮</c-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonExample",
  components: {
  },
  created() {
  },
  data() {
    return {
    };
  },
  methods: {
    buttonMethods() {
      alert(888)
    }
  }
};
</script>

<style lang='less'>
</style>