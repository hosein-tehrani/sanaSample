<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
/* Import custom scss */
@import "assets/scss/_custom.scss";
a{
  text-decoration: none !important;
}

</style>
