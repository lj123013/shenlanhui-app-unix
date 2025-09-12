# lime-text-ellipsis 文本省略
对长文本进行省略，支持展开/收起


## 安装
在插件市场导入插件即可在任意页面使用

## 文档
[text-ellipsis](https://limex.qcoon.cn/components/text-ellipsis.html)

## 代码演示
### 基础用法

默认展示 `1` 行，超过 `1` 行显示省略号。

```html
<l-text-ellipsis content="很多时候，总以为可以一直拥有，拥有那些自己想要的快乐，用于那些自以为需要的一切，只是，却没发现，当心正开始从无到有慢慢接纳的时候。离失去也就不远了。" />
```


### 展开/收起

超过行数支持展开/收起。

```html
<l-text-ellipsis content="很多时候，总以为可以一直拥有，拥有那些自己想要的快乐，用于那些自以为需要的一切，只是，却没发现，当心正开始从无到有慢慢接纳的时候。离失去也就不远了。" expand-text="展开" collapse-text="收起" />
```



### 自定义展示行数

通过设置 `rows` 限制展示行数。

```html
<l-text-ellipsis
  :rows="3"
  content="树叶，离开了树桠，不全是季节的无奈。换来了新生，何尝不是一种胸怀。花朵，离开了花枝，不全是规律的悲哀。化作了春泥，生命也许更为精彩。离开，或许不是离开，如果心中有爱。离开，或许不是离开，如果因为未来。"
  expand-text="展开"
  collapse-text="收起"
/>
```


### 自定义icon
uvue不支持

```html
<l-text-ellipsis
  :rows="3"
  content="树叶，离开了树桠，不全是季节的无奈。换来了新生，何尝不是一种胸怀。花朵，离开了花枝，不全是规律的悲哀。化作了春泥，生命也许更为精彩。离开，或许不是离开，如果心中有爱。离开，或许不是离开，如果因为未来。"
  expand-text="展">
  <!-- 无法直接获取自定义icon， 故需要设置 expandText 占位  -->
  <template #icon={expanded}>
  	<text class="icon" :class="expanded && 'show'">⮞</text>
  </template>
</l-text-ellipsis>
```

### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-text-ellipsis/compoents/lime-text-ellipsis 
<lime-text-ellipsis />
```

### 插件标签
- 默认 l-text-ellipsis 为 component
- 默认 lime-text-ellipsis 为 demo

### 依赖
- 插件依赖 [lime-shared](https://ext.dcloud.net.cn/plugin?id=12163) ，会自动下载。依赖是按需的，并不会把`lime-shared`全部函数打包！


### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可

```js
// main.js vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## API

### Props

| 参数          | 说明             | 类型               | 默认值  |
| ------------- | ---------------- | ------------------ | ------- |
| rows          | 展示的行数       | _number_ | `1`     |
| content       | 需要展示的文本   | _string_           | -       |
| expand-text   | 展开操作的文案   | _string_           | -       |
| collapse-text | 收起操作的文案   | _string_           | -       |
| dots          | 省略号的文本内容 | _string_           | `'...'` |
| position      | 省略位置，可选`start`,`middle`,`end` | _string_           | `'end'` |

### Events

| 事件         | 说明                | 回调参数            |
| ------------ | ------------------- | ------------------- |
| click | 点击展开/收起时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量
- 在nvue下不支持
组件提供了下列 CSS 变量，可用于自定义样式

| 名称                              | 默认值                     | 描述 |
| --------------------------------- | -------------------------- | ---- |
| --l-text-ellipsis-action-color    | _#1677ff_                   | -    |
| --l-text-ellipsis-line-height | _1.6_                     | -    |
