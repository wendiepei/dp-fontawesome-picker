<template>
    <div id="iconPicker">
        <div class="icon-picker__header">
            <input type="text" :placeholder="searchPlaceholder" @keyup="filterIcons($event)">
        </div>
        <div class="icon-picker__body">
            <div class="icon-picker__icons">
                <a href="#" @click.stop.prevent="getIcon(key)" :class="`item ${selected === key ? 'selected' : ''}`"
                        v-for="(value, key) in icons" :key="key">
                    <font-awesome-icon :icon="['fas', key]"></font-awesome-icon>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import icons from './icons';

export default {
    name: 'DpFontawesomePicker',
    props: ['searchBox'],
    data () {
        return {
            selected: '',
            icons,
        };
    },
    computed: {
        searchPlaceholder () {
            return this.searchBox || 'search box';
        },
    },
    methods: {
        getIcon (key) {
            this.selected = key;
            // NEED TO FIX CONVERT METHOD
            // this.convert(icon);
            this.selectIcon(key);
        },
        convert (value) {
            const newValue = value
                .charCodeAt(1)
                .toString(10)
                .replace(/\D/g, '');

            let hexValue = Number(newValue).toString(16);

            while (hexValue.length < 4) {
                hexValue = `0${hexValue}`;
            }
        },
        selectIcon (value) {
            this.$emit('selectIcon', value);
        },
        filterIcons (event) {
            const search = event.target.value.trim();
            let filter = {};

            if (search.length > 0) {
                const regex = new RegExp(search, 'gi');
                const filteredKeys = Object.keys(icons).filter(key => key.match(regex));
                filter = filteredKeys.reduce((obj, key) => {
                    obj[key] = icons[key];
                    return obj;
                }, {});
            } else if (search.length === 0) {
                this.icons = icons;
            }

            if (Object.keys(filter).length > 0) {
                this.icons = filter;
            }
        },
    },
};
</script>

<style>
#iconPicker {
    position: relative;
    max-width: 292px;
    background: #ffffff;
    padding-top: 15px;
}
.icon-picker__header {
    padding: 1em;
    border-radius: 8px 8px 0 0;
    border: 1px solid #dcdfe6;
    border-bottom: none;
}
.icon-picker__header input {
    width: 100%;
    padding: 1em;
    height: 36px;
    line-height: 36px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
}
.icon-picker__body {
    position: relative;
    max-height: 250px;
    overflow: auto;
    padding: 1em 0 1em 1em;
    border-radius: 0 0 8px 8px;
    border: 1px solid #dcdfe6;
}
.icon-picker__icons {
    display: table;
}
.icon-picker__icons .item {
    float: left;
    width: 40px;
    margin: 0 12px 12px 0;
    text-align: center;
    border-radius: 3px;
    font-size: 14px;
    box-shadow: 0 0 0 1px #ddd;
    color: inherit;
    height: 36px;
    line-height: 36px;
    padding: 0px;
}
.icon-picker__icons .item.selected {
    background: #ccc;
}
.icon-picker__icons .item i {
    box-sizing: content-box;
}

.icon-picker__body::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
.icon-picker__body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(150, 150, 150, 0.2);
    border-radius: 0;
    background: rgba(150, 150, 150, 0.1);
}
.icon-picker__body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(150, 150, 150, 0.2);
    background: rgba(150, 150, 150, 0.2);
}
</style>
