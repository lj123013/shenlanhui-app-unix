# lime-dateformat 日期格式化组件
一个功能丰富的日期格式化组件，用于将日期转换为多种格式。支持将日期格式化为标准格式或相对时间（如"刚刚"、"几分钟前"等），可用于文章发布时间、评论时间、消息时间等多种场景。组件提供了丰富的自定义选项，可以满足各种日期展示需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [日期格式化组件文档 - 站点1](https://limex.qcoon.cn/components/dateformat.html)
- [日期格式化组件文档 - 站点2](https://limeui.netlify.app/components/dateformat.html)
- [日期格式化组件文档 - 站点3](https://limeui.familyzone.top/components/dateformat.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-dateformat`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-dateformat`组件

## 代码演示

### 基础用法
最简单的日期格式化组件用法，传入日期字符串或时间戳。

```html
<l-dateformat date="2024/11/14 05:00"/>
<l-dateformat date="1731531854460"/>
```

### 自定义格式
通过`format`属性设置日期的显示格式。

```html
<l-dateformat date="2024/11/14 05:00" format="yyyy年MM月dd日 hh:mm:ss"/>
<l-dateformat date="2024/11/14 05:00" format="MM/dd hh:mm"/>
<l-dateformat date="2024/11/14 05:00" format="yyyy-MM-dd"/>
```

### 相对时间显示
通过`threshold`属性设置相对时间的转换阈值。

```html
<!-- 显示为"xx分钟前"或"xx小时前" -->
<l-dateformat date="2024/11/14 05:00" :threshold="[60000, 3600000]"/>
```

### 不同语言
通过`locale`属性设置显示语言。

```html
<!-- 中文显示 -->
<l-dateformat date="2024/11/14 05:00" locale="zh"/>

<!-- 英文显示 -->
<l-dateformat date="2024/11/14 05:00" locale="en"/>
```

### 自动刷新
通过`refreshRate`属性设置自动刷新的时间间隔（毫秒）。

```html
<!-- 每分钟刷新一次 -->
<l-dateformat date="2024/11/14 05:00" :refreshRate="60000"/>
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-dateformat/components/lime-dateformat -->
<lime-dateformat />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-dateformat` | 组件标签 |
| `lime-dateformat` | 演示标签 |

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)


## API文档

### Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| date | 日期字符串或时间戳 | _string_ | - |
| locale | 格式化使用的语言，支持zh（中文）、en（英文） | _string_ | `'zh'` |
| format | 格式字符串，如yyyy/MM/dd hh:mm:ss | _string_ | `'yyyy/MM/dd hh:mm:ss'` |
| threshold | 转化类型阈值，格式为[毫秒数1, 毫秒数2] | _Array_ | `[0, 0]` |
| refreshRate | 自动刷新的时间间隔（毫秒），0表示不自动刷新 | _number_ | `0` |

### 格式字符说明

| 格式 | 说明 | 示例 |
| --- | --- | --- |
| yyyy | 四位年份 | 2024 |
| yy | 两位年份 | 24 |
| MM | 两位月份（补0） | 01-12 |
| M | 一位月份（不补0） | 1-12 |
| dd | 两位日期（补0） | 01-31 |
| d | 一位日期（不补0） | 1-31 |
| hh | 两位小时（补0） | 00-23 |
| h | 一位小时（不补0） | 0-23 |
| mm | 两位分钟（补0） | 00-59 |
| m | 一位分钟（不补0） | 0-59 |
| ss | 两位秒数（补0） | 00-59 |
| s | 一位秒数（不补0） | 0-59 |

### threshold 阈值说明

以`[60000, 3600000]`为例，将传入时间与当前时间差的绝对值记为delta（单位毫秒）：

- 当`delta < 60000`时，时间会被转化为“刚刚|马上”
- 当`delta >= 60000 && delta < 3600000`时，时间会被转化为“xx分钟前|xx分钟后”，如果超过1小时会显示成“xx小时前|xx小时后”，以此类推
- 当`delta >= 3600000`时，会按照format参数传入的格式进行格式化

如果不想转化为“马上|刚刚”可以传入`:threshold = "[0,3600000]"`。默认值`[0,0]`既不会转换为“马上|刚刚”也不会转化为“xx分钟前|xx分钟后”


## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-dateformat-color` | `$text-color-1` | 日期文本颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |