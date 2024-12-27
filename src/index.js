import DpFontawesomePicker from "@/components/DpFontawesomePicker";

const MyPlugin = {
    install(Vue) {
        Vue.component('DpFontawesomePicker', DpFontawesomePicker);
    },
};

export default MyPlugin;

export { DpFontawesomePicker };