# lime-dateformat 日期格式化
- 日期格式化组件，可以将日期格式化为1分钟前、刚刚等形式，参考uni-dateformat,兼容uniapp/uniappx
- 插件依赖`lime-shared`不喜勿下


## 文档
  [dateformat【站点1】](https://limex.qcoon.cn/components/dateformat.html)
  [dateformat【站点2】](https://limeui.netlify.app/components/dateformat.html)
  [dateformat【站点3】](https://limeui.familyzone.top/components/dateformat.html)




## 安装
在插件市场导入即可，首次导入可能需要重新编辑

## 代码演示
### 基础使用
通过`date`传入日期字符串/时间戳
```html
<l-dateformat date="2024/11/14 05:00"/>
<l-dateformat date="1731531854460"/>
```

### 时间阈值
通过`threshold`传入转化类型阈值,以`[60000, 3600000]`为例，将传入时间与当前时间差的绝对值记为delta（单位毫秒）

- `delta < 60000`时，时间会被转化为“刚刚|马上”
- `delta >= 60000 && delta < 3600000`时，时间会被转化为“xx分钟前|xx分钟后”，如果超过1小时会显示成“xx小时前|xx小时后”，以此类推
- `delta >= 3600000`时，会按照format参数传入的格式进行格式化
如果不想转化为“马上|刚刚”可以传入`:threshold = "[0,3600000]"`。默认值`[0,0]`既不会转换为“马上|刚刚”也不会转化为“xx分钟前|xx分钟后”

Format Options
```html
<l-dateformat date="2024/11/14 05:00" :threshold="[60000, 3600000]"/>
<l-dateformat date="1731531854460" :threshold="[60000, 3600000]"/>
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-dateformat/compoents/lime-dateformat 
<lime-dateformat />
```

### 插件标签
- 默认 l-dateformat 为 component
- 默认 lime-dateformat 为 demo

### Vue2使用��vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API

### Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| date  | 日期字符串/时间戳               | _string_  | `-`     |
| threshold  | 转化类型阈值 | _number[]_ | `[0,0]` |
| format | 格式字符串 | _string_ | `'yyyy/MM/dd hh:mm:ss'` |
| locale | 格式化使用的语言，目前支持zh（中文）、en（英文） | _string_ | `zh` |



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)