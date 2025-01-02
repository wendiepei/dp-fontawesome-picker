# 一款基于 FontAwesome V6 免费版的图标选择器
English(README.md) | 简体中文

## 说明
这是一款基于VUE2+FontAwesome V6免费版的小插件

本人自己使用，现在开放给大家免费使用，有兴趣可以试试（别忘了点个star⭐️）

## 效果
![image](https://github.com/user-attachments/assets/2dbff60d-1409-4bf7-94ed-f1f1b3e995d4)

## 使用
使用前请先安装 FontAwesome V6 ，[传送门](https://docs.fontawesome.com/web/use-with/vue "传送门")

##### 1. 安装插件
```shell
npm install dp-fontawesome-picker

```
##### 2. 使用插件

`main.js`里添加
```javascript
import DpFontawesomePicker from 'dp-fontawesome-picker'
Vue.use(DpFontawesomePicker)
```

VUE页面使用
```html
<template>
    <dp-fontawesome-picker v-on:selectIcon="handleFontPicker" :searchBox="输入关键字进行过滤"></dp-fontawesome-picker>
</template>

<script>
    ...
    methods: {
        handleFontPicker(selectedIcon) {
	    // 您的业务处理
        },
    }
    ...
</script>
```
