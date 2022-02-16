import Vue from "vue";
import Toast from "vue-toastification";

const loading = () => import("../components/Loading.vue"); //import loading component
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
export default {
  components: {loading},
  data() {
    return {
      vLoading: false,
    };
  },
  methods: {
    toast(message, type) {
      this.$toast[type](message, {
        position: type == 'success' ? 'top-left' : 'top-center',
        icon: false,
        closeButton: false,
        timeout: 3000,
      });
    }
  }
};
