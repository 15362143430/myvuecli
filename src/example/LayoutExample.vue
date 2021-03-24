<template>
    <div class="demo-layout">
      <c-row :gutter="20">
        <c-col :span="24"
          ><div class="item">{{ doubleNum }}</div></c-col
        >
      </c-row>
      <c-row :gutter="20">
        <c-col :span="12"> <div class="item">hhh</div></c-col>
        <c-col :span="12"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="8"><div class="item">hhh</div></c-col>
        <c-col :span="8"><div class="item">hhh</div></c-col>
        <c-col :span="8"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6" :offset="12"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row type="flex" justify="end">
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row type="flex" justify="space-around">
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row type="flex" justify="space-between">
        <c-col :span="6"><div class="item">hhh</div></c-col>
        <c-col :span="6"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row :gutter="10">
        <c-col :xs="8" :sm="6" :md="1" :lg="6" :xl="1"><div class="item">hhh</div></c-col>
        <c-col :xs="4" :sm="6" :md="1" :lg="6" :xl="11"><div class="item">hhh</div></c-col>
        <c-col :xs="4" :sm="6" :md="12" :lg="11" :xl="11"><div class="item">hhh</div></c-col>
        <c-col :xs="8" :sm="6" :md="10" :lg="1" :xl="1"><div class="item">hhh</div></c-col>
      </c-row>
      <c-row :gutter="10" tag="header">
        <c-col tag="p" :xs="8" :sm="6" :md="1" :lg="6" :xl="1"><div class="item">hhh</div></c-col>
        <c-col :xs="4" :sm="6" :md="1" :lg="6" :xl="11"><div class="item">hhh</div></c-col>
        <c-col :xs="4" :sm="6" :md="12" :lg="11" :xl="11"><div class="item">hhh</div></c-col>
        <c-col :xs="8" :sm="6" :md="10" :lg="1" :xl="1"><div class="item">hhh</div></c-col>
      </c-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.demo-layout {
  .c-row {
    margin-bottom: 20px;
  }
  .c-col {
    .item {
      height: 30px;
      background: green;
      border: 1px solid red;
      border-radius: 4px;
    }
  }
}
</style>