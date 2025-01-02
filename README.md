# An Icons Picker With FontAwesome V6
English | [简体中文](https://github.com/wendiepei/dp-fontawesome-picker/blob/master/README_zh.md) 

## VIEW
![image](https://github.com/user-attachments/assets/2dbff60d-1409-4bf7-94ed-f1f1b3e995d4)

## USE
First install [FontAwesome V6](https://docs.fontawesome.com/web/use-with/vue "传送门")

##### 1. INSTALL
```shell
npm install dp-fontawesome-picker

```
##### 2. USE

`main.js` 
Import and register the component.
```javascript
import DpFontawesomePicker from 'dp-fontawesome-picker'
Vue.use(DpFontawesomePicker)
```
Use
```html
<template>
    <dp-fontawesome-picker v-on:selectIcon="handleFontPicker" :searchBox="filter"></dp-fontawesome-picker>
</template>

<script>
    ...
    methods: {
        handleFontPicker(selectedIcon) {
	    // your code
        },
    }
    ...
</script>
```
