import { createApp } from "vue";
import globalRegisterApp from "@/global";
import "normalize.css";
import "./assets/css/index.less";
// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);
// globalRegisterApp(app)
app.use(globalRegisterApp);
app.use(store);
app.use(router);
// app.use(ElementPlus)
app.mount("#app");
//# sourceMappingURL=main.js.map