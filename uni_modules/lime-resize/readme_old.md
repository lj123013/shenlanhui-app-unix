# lime-resize 监听元素尺寸变化
当插件包裹的文档流或插件所在的文档流尺寸发生变化时，触发 size 事件。一般用于监听 dom 内容更新时导致的 dom 尺寸位置的变化，重新获取 dom 尺寸和位置，进行内容展示的计算操作。


## 文档
 🚀 [resize【站点1】](https://limex.qcoon.cn/components/resize.html)
 🌍 [resize【站点2】](https://limeui.netlify.app/components/resize.html)
 🔥 [resize【站点3】](https://limeui.familyzone.top/components/resize.html)


## 安装
插件市场导入即可，首次导入可能需要重新编译

## 代码演示

### 监听父级
文档流包裹`resize`插件时并且文档是设置相对定位`position: relative`，当dom变化后会触发插件的`@resize`事件。

```html
<view class="parent" style="position: relative; ">
	<l-resize @resize="handleResize"></l-resize>
</view>
```

### 监听子级
插件包文档流时，当dom变化后会触发插件的`@resize`事件。不要给此插件增加任何外部样式

```html
<l-resize @resize="handleResize">
	<view class="child"></view>
</l-resize>
```

### 插件标签
默认 l-resize 为 component  
默认 lime-resize 为 demo  

### Vue2使用
插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置  
关键代码是: 在main.js中 在vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## 常见问题
- 不支持 nvue，在nvue中元素缩小了也不能正常拿到尺寸，这就让人无语了。

## API

### Events
| 参数                       | 说明                                                         | 参数             | 
| --------------------------| ------------------------------------------------------------ | ---------------- |
| resize              		| 尺寸发生变化时触发  | `event.detail = { width: number, height: number, top: number, right: number, bottom: number, left: number }` | 

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)