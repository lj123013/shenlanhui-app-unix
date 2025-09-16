# 自定义颜色使用指南

## 1. 配置自定义颜色

在 `tailwind.config.ts` 文件中的 `theme.extend.colors` 下添加你的自定义颜色：

```typescript
colors: {
  // 自定义颜色
  custom: {
    // 单个颜色
    primary: '#2854F2',
    secondary: '#E8EDFF',
    accent: '#E4773D',
  
    // 背景颜色
    bg: {
      default: '#FFFFFF',
      gray: '#F5F5F5',
      card: '#FEF8F5'
    },
    // 文本颜色
    text: {
      primary: '#191919',
      secondary: '#666666',
      muted: '#999999'
    }
  }
}
```

## 2. 在 Vue 组件中使用自定义颜色

### 背景颜色
```vue
<!-- 使用自定义背景颜色 -->
<view class="bg-custom-bg-default">默认背景</view>
<view class="bg-custom-bg-gray">灰色背景</view>
<view class="bg-custom-bg-card">卡片背景</view>
<view class="bg-custom-primary">主色背景</view>
```

### 文本颜色
```vue
<!-- 使用自定义文本颜色 -->
<text class="text-custom-text-primary">主要文本</text>
<text class="text-custom-text-secondary">次要文本</text>
<text class="text-custom-text-muted">灰色文本</text>
<text class="text-custom-accent">强调色文本</text>
```

### 边框颜色
```vue
<!-- 使用自定义边框颜色 -->
<view class="border border-custom-primary">主色边框</view>
<view class="border-2 border-custom-secondary">次要色边框</view>
```

## 3. 完整示例

```vue
<template>
  <view class="bg-custom-bg-default p-4">
    <!-- 标题 -->
    <text class="text-custom-text-primary text-xl font-bold mb-4">
      自定义颜色示例
    </text>
    
    <!-- 卡片 -->
    <view class="bg-custom-bg-card p-4 rounded-lg border border-custom-secondary mb-4">
      <text class="text-custom-text-primary text-lg mb-2">
        卡片标题
      </text>
      <text class="text-custom-text-secondary">
        这是一个使用自定义颜色的卡片组件
      </text>
    </view>
    
    <!-- 按钮 -->
    <view class="bg-custom-primary p-3 rounded-lg">
      <text class="text-white text-center">
        主要按钮
      </text>
    </view>
    
    <!-- 次要按钮 -->
    <view class="bg-custom-secondary p-3 rounded-lg mt-2">
      <text class="text-custom-primary text-center">
        次要按钮
      </text>
    </view>
  </view>
</template>
```

## 4. 其他使用方式

### 方式一：直接在 CSS 中使用
```vue
<style>
.custom-style {
  background-color: theme('colors.custom.primary');
  color: theme('colors.custom.text.primary');
}
</style>
```

### 方式二：使用 CSS 变量（如果配置了）
```vue
<style>
:root {
  --custom-primary: #2854F2;
  --custom-secondary: #E8EDFF;
}

.my-component {
  background-color: var(--custom-primary);
}
</style>
```

## 5. 色彩建议

根据你的对话页面，建议定义以下颜色：

- **主色**: `#2854F2` (蓝色，用于用户消息背景)
- **次要色**: `#E8EDFF` (浅蓝色，用于用户消息背景)
- **强调色**: `#E4773D` (橙色，用于警告提示)
- **背景色**: `#FFFFFF` (白色，页面背景)
- **卡片背景**: `#FEF8F5` (浅橙色，AI提示背景)
- **文本色**: `#191919` (深色，主要文本)

使用示例：
```vue
<!-- 用户消息 -->
<view class="bg-custom-secondary text-custom-primary p-4 rounded-lg">
  用户消息内容
</view>

<!-- AI 提示 -->
<view class="bg-custom-bg-card border border-orange-200 p-3 rounded-lg">
  <text class="text-custom-accent">AI 提示信息</text>
</view>
```