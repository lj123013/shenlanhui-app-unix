# lime-resize 监听元素尺寸变化
监听元素尺寸变化组件，当组件包裹的文档流或组件所在的文档流尺寸发生变化时，触发 resize 事件。一般用于监听 DOM 内容更新时导致的尺寸位置变化，重新获取尺寸和位置，进行内容展示的计算操作。

> 插件依赖：`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [监听元素尺寸变化文档 - 站点1](https://limex.qcoon.cn/components/resize.html)
- [监听元素尺寸变化文档 - 站点2](https://limeui.netlify.app/components/resize.html)
- [监听元素尺寸变化文档 - 站点3](https://limeui.familyzone.top/components/resize.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-resize`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-resize`组件（组件）或`lime-resize`（演示）

## 代码演示

### 监听父级
文档流包裹`resize`组件时并且文档是设置相对定位`position: relative`，当DOM变化后会触发组件的`@resize`事件。

```html
<view class="parent" style="position: relative;">
    <l-resize @resize="handleResize"></l-resize>
</view>
```

```js
export default {
    methods: {
        handleResize(e: DOMRect) {
            console.log('尺寸变化', e.detail);
            // e.detail = { width, height, top, right, bottom, left }
        }
    }
}
```

### 监听子级
组件包裹文档流时，当DOM变化后会触发组件的`@resize`事件。不要给此组件增加任何外部样式。

```html
<l-resize @resize="handleResize">
    <view class="child"></view>
</l-resize>
```

```js
export default {
    methods: {
        handleResize(e) {
            console.log('尺寸变化', e.detail);
            // e.detail = { width, height, top, right, bottom, left }
        }
    }
}
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-resize/components/lime-resize -->
<lime-resize />
```

## Vue2使用说明
本插件使用了`composition-api`，如需在Vue2项目中使用，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API文档

### Events

| 事件名  | 说明             | 回调参数                                |
| ------- | ---------------- | --------------------------------------- |
| resize  | 尺寸发生变化时触发 | `event.detail = { width, height, top, right, bottom, left }` |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 需要监听尺寸变化的内容 |

## 支持与赞赏

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |