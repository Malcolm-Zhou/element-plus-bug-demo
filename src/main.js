import { createApp } from "vue";
import "./style/element-variables.scss";
import ElementPlus from "element-plus";

import App from "./App.vue";

console.log(ElementPlus.version);

createApp(App).use(ElementPlus).mount("#app");
