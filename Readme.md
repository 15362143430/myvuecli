---
theme: condensed-night-purple
highlight: a11y-dark
---
>![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5deb82296fca4d28bff43c221db62c1d~tplv-k3u1fbpfcp-watermark.image)
>大家好，我是林三心，哎呀，咱们搞Vue的肯定是接触过很多UI库，其中用的最多的肯定是ElementUI啦！用了这么久，难道你就不想知道他是怎么实现的吗？就像是你跟一个女孩子相处久了，你喜欢她，自然就会想知道她的很多事，那你不主动去问，她怎么可能告诉你？？？一起来看看ElementUI源码呗。嘻嘻！
## 下载

### Gayhub下载（源码版）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c83d973d1934424a8e969088703af16~tplv-k3u1fbpfcp-watermark.image)
>gayhub的clone大家都会的哦
### 直接在你自己项目的node_module中复制（发布版）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f51684b22dc46228c76fb86a0b5686b~tplv-k3u1fbpfcp-watermark.image)
>是的，我就是在这复制的，现成的嘿嘿
## 目录分析
>因为主要是看package这个目录里的源码，所以其实哪个版都可以学习，我用的发布版 
```js
/ 发布版本包目录结构
element-ui
    ├── lib                    // 打包后文件目录
    ├── packages               // 组件的源码目录 (主要学习)
        ├── alert              // 具体组件源码包
            ├── src            // Vue组件包
            ├── index.js       // 入口文件
    ├── src                    // 源码目录
        ├── directive          // 实现滚轮优化，鼠标点击优化
        ├── locale             // i18n国际化
        ├── mixins             // Vue混合器
        ├── transition         // 样式过渡效果
        ├── utils              // 工具类包
        ├── index.js           // 源码入口文件
    ├── types                  // typescript文件包
    ├── package.json           // npm包核心文件
```
## ElementUI文档查看
### 组件分析
>`el-row`包着`el-col`，实现“行”与“列”的效果。兄弟们都用过的，都懂。
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eac6c12d1ec044fcb69e8923dcc75583~tplv-k3u1fbpfcp-watermark.image)
### el-row的参数

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfe051d524db408d85839a6412f3881d~tplv-k3u1fbpfcp-watermark.image)
### el-col的参数

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14050aea9c6e40a0a0f30185a6e3fd76~tplv-k3u1fbpfcp-watermark.image)

## 冲！！！开搞！！！
### 目录搭建
>我是拿我之前自己搭的一个脚手架来学习ElementUI源码的，兄弟们可以选择自己搭脚手架，也可以用Vuecli直接学习，掘金有很多大佬“搭建脚手架”的文章，有兴趣的可以找一找哦，样式的话可以直接源码复制，这里我们只讨论JavaScript方面的

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cab69767db94f1ea3f0f0f0e815798e~tplv-k3u1fbpfcp-watermark.image)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/215c2ebc22d14c67950de1937215a93c~tplv-k3u1fbpfcp-watermark.image)
### el-row模仿源码分析
```js
// 文件 row / src / Row.js 中
export default {
  name: 'CRow',
  props: {
    gutter: { // 栅格间隔
      type: Number,
      default: 0,
    },
    type: String, // 布局模式，可选flex，现代浏览器下有效
    justify: { // flex布局下的水平排列方式
      type: String,
      default: 'start',
    },
    align: { // flex布局下的垂直排列方式
      type: String,
      default: 'top',
    },
    tag: { // 自定义元素标签（涉及到vue的render函数里的createElement）
      type: String,
      default: 'div', // 默认是div标签
    },
  },
  created() {
    console.log(this.$slots, this.$slots.default.length, 'slots') // 想看看$slot长啥样，你们可以忽略
  },
  computed: {
    getRowGutterStyle() { // 计算左右margin，配合gutter计算
      if (this.gutter === 0) return ''
      const value = this.gutter / 2 + 'px'
      return {
        marginLeft: value,
        marginRight: value,
      }
    },
    getRowFlexClass() { // 计算出flex布局的class是哪些
      return [
        { 'c-row-flex': this.type === 'flex' },
        this.justify === 'start' ? '' : `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ]
    },
  },
  render: function (createElement) { // 渲染dom的函数render
    return createElement(this.tag, { // 利用createElement创建dom
      class: [
        'c-row',
        { 'c-row-flex': this.type === 'flex' },
        this.justify === 'start' ? '' : `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ],
      style: this.getRowGutterStyle
    }, this.$slots.default)
  },
}

// 文件 row / index.js 中
import CRow from './src/Row.js'

CRow.install = function (Vue) { // 为什么要有install方法，下文会讲
    Vue.component(CRow.name, CRow) // 全局注册组件
}

export default CRow
```
### el-col模仿源码分析
```js
// 文件 col / src / Col.js中
export default {
  name: 'CCol',
  props: {
    span: { // 栅格占据的列数
      type: Number,
      default: 24,
    },
    offset: { // 栅格左侧的间隔格数
      type: Number,
      default: 0,
    },
    // scss的for循环函数 + 媒体查询 可以实现以下效果
    xs: [Number, Object],// <768px 响应式栅格数或者栅格属性对象
    sm: [Number, Object],// ≥768px 响应式栅格数或者栅格属性对象
    md: [Number, Object],// ≥992px 响应式栅格数或者栅格属性对象
    lg: [Number, Object],// ≥1200px 响应式栅格数或者栅格属性对象
    xl: [Number, Object],// ≥1920px 响应式栅格数或者栅格属性对象
    tag: { // 自定义元素标签（涉及到vue的render函数里的createElement）
      type: String,
      default: 'div' // 默认是div标签
    }
  },
  computed: {
    getColGutterStyle() {
      const gutter = this.$parent.gutter // 因为el-row是包在el-row里的，所以想要计算每个栅格之间的间隔需要从外层的el-row获取gutter计算padding
      if (this.gutter === 0) return ''
      const value = gutter / 2 + 'px'
      return {
        paddingLeft: value,
        paddingRight: value,
      }
    },
    getColOffsetClass() { // 根据offset计算每一栅格向左的间隔
      if (this.offset === 0) return ''
      return 'c-col-offset-' + this.offset
    },
    getColMediaClass() { // 计算响应式的class
      let sizeArr = [];
      ['xs', 'xm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') { // 判断传进来了哪个响应式宽度，并计算出class名，保存在数组中
          sizeArr.push(`c-col-${size}-${this[size]}`)
        }
      })
      return sizeArr
    },
  },
  render: function (createElement) { // render函数渲染dom
    return createElement(this.tag, { // createElement函数创建dom
      class: ['c-col', 'c-col-' + this.span, this.getColOffsetClass, ...this.getColMediaClass], // 动态class绑定
      style: this.getColGutterStyle // 动态style绑定
    }, this.$slots.default) // 默认插槽
  },
}

// 文件 col / index.js 中
import CCol from './src/Col.js'

CCol.install = function (Vue) { // 为什么要有install方法，下文会讲
    Vue.component(CCol.name, CCol) // 全局注册组件
}

export default CCol
```
```css
// style / row.scss 文件中
// 生成 c-col-1 到 c-col-24
@for $i from 1 through 24 {
    .c-col-#{$i} {
        width: 100%/24 * $i;
    }
}

// 生成 c-col-offset-1 到 c-col-offset-24
@for $i from 1 through 24 {
    .c-col-offset-#{$i} {
        margin-left: 100%/24 * $i;
    }
}

.c-col {
    display: inline-block;
    box-sizing: border-box;
}

@media screen and (max-width: 767px) {
    @for $i from 1 through 24 {
        .c-col-xs-#{$i} {
            width: 100%/24 * $i;
        }
    }
}

@media screen and (min-width: 768px) {
    @for $i from 1 through 24 {
        .c-col-sm-#{$i} {
            width: 100%/24 * $i;
        }
    }
}

@media screen and (min-width: 992px) {
    @for $i from 1 through 24 {
        .c-col-md-#{$i} {
            width: 100%/24 * $i;
        }
    }
}

@media screen and (min-width: 1200px) {
    @for $i from 1 through 24 {
        .c-col-lg-#{$i} {
            width: 100%/24 * $i;
        }
    }
}

@media screen and (min-width: 1920px) {
    @for $i from 1 through 24 {
        .c-col-xl-#{$i} {
            width: 100%/24 * $i;
        }
    }
}
```
### 使用组件
```js
// 主入口文件main.js中引入
import '../package/styles/index.scss' // 引入总样式
import { CButton, CButtonGroup, CRow, CCol, CContainer, 
    CHeader, CFooter, CAside, CMain, CBacktop, CCard } from '../package/index' // 解构引入
Vue.use(CButton)
Vue.use(CButtonGroup)
Vue.use(CRow) // 这就是为什么要导出一个install方法
Vue.use(CCol) // 这就是为什么要导出一个install方法
Vue.use(CContainer)
Vue.use(CHeader)
Vue.use(CFooter)
Vue.use(CAside)
Vue.use(CMain)
Vue.use(CBacktop)
Vue.use(CCard)
```
>然后就可以全局使用了
```html
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
```

### 为什么要导出一个install方法，他跟Vue的use方法有什么关系
>长话短说就是，`Vue.use(options)`时，会执行`options`中的`install`属性，也就是`install`函数，上文导出了一个`install`函数，函数里包含了注册全局组件的代码，所以如果想要能被Vue的`use`方法，就必须确保你导出的options对象中包含install方法

## 学习总结
>代码是一个一个敲的，但是不能敲了就这么过去吧，总得学点什么，否则你敲了代码也无用呀！以下是我在模仿ElementUI的Layout组件时学到的新知识（对于我来说是新知识）
* `scss`中`@for`方法的使用
* 子组件从父组件中获取数据，使用`this.$parent`获取
* `Vue.use(options)`会执行`options`的`install`函数
* `$slots`是一个对象，`key`为`slot-name`，`value`为对应的元素（数组），默认`key`是`default`


