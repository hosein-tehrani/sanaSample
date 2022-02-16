import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// Containers
const Page404 = () => import("@/views/Page404");

//User pages
const UserForm = () => import("@/views/UserForm");
const Users = () => import("@/views/Users");


export default new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    //user pages
    {
      path: "/UserForm",
      name: "UserForm",
      component: UserForm,
    },
    {
      path: "/Users",
      name: "Users",
      component: Users,
    },
    { path: "*", component: Page404 },
    { path: "/", redirect: window.localStorage.token ? "/Users" : '/UserForm' },
  ],
});
