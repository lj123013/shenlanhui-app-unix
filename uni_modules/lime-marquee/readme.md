# lime-marquee 跑马灯
> 跑马灯组件，支持横向/纵向不间断滚动，自定义内容循环衔接
> 插件依赖`lime-style`,`lime-shared`不喜勿下

## 安装
插件市场导入即可，uniapp x app 需要hb4.53及以上

## 文档
[marquee](https://limex.qcoon.cn/components/marquee.html)

## 代码演示

### 基础使用
为了实现无缝滚动，数据必须是两份拼接
```html
 <l-marquee style="height: 200rpx">
   <view
		v-for="(item, i) in data"
		:key="i"
		style="
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 16rpx;">
		<view>{{ item }}</view>
		<text style="color: #999;">02-15</text>
   </view>
 </l-marquee>
```
```js
const kungFuManuals = ['九阳真经', '九阴真经', '易筋经', '神照经', '北冥神功', '吸星大法', '独孤九剑', '降龙十八掌'];
const genDataWithRandomManual = ():string[] => {
	return '郭靖 黄蓉 杨过 小龙女 令狐冲 任盈盈 张无忌 赵敏'.split(' ').map((item):string => {
		const randomIndex = Math.floor(Math.random() * kungFuManuals.length);
		return `恭喜${item}获得《${kungFuManuals[randomIndex]}》`;
  });
}
const manual = genDataWithRandomManual()
const data = ref([...manual, ...manual])
```


### 水平方向
通过设置`direction`为`horizontal`水平滚动
```html
 <l-marquee direction="horizontal" :speed="520">
   <view
		v-for="(item, i) in data"
		:key="i"
		style="flex-direction: row; display: flex; margin-right: 60rpx">
		<view style="display: flex;">{{ item }}</view>
		<text style="color: #999;">02-15</text>
   </view>
 </l-marquee>
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-marquee/compoents/lime-marquee -->
<lime-marquee />
```


### 插件标签
- 默认 l-marquee 为 component
- 默认 lime-marquee 为 demo

### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


```typescript
direction: 'vertical' | 'horizontal';
speed: number;
delay: number;
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 滚动方向，可选`'vertical' 'horizontal'` | _string_ | `vertical` |
| speed | 滚动速率 | _number_ | `50` |
| delay | 延迟滚动时间 | _number_ | `1000` |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| defalut | 默认插槽 |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)