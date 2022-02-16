// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "vue-toastification/dist/index.css";
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBkO-drpYlYoU9BtAei6RawVGHYjpRAj80',
    libraries: 'places',
  }
});
// to use axios globally
import Axios from "axios";
Vue.prototype.$http = Axios;

import global from "./mixins/global";
Vue.mixin(global);

new Vue({
  el: "#app",
  data: {},
  router,
  template: "<App/>",

  components: {
    App
  },
  vuetify,

  mounted() {}
});
