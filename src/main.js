import Vue from "vue";
import App from "./App.vue";
import Element from "@/element/index.js";
import "element-ui/lib/theme-chalk/index.css";
import TablePage from "@/components/TablePage/TablePage.vue";
Vue.component("TablePage", TablePage);
import FormProp from "@/components/Form/Form.vue";
Vue.component("FormProp", FormProp);
Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
