<template>
  <div class="users-page">
    <h6 class="text-center page-title mt-3">اطلاعات کاربران</h6>
    <v-card>
      <v-card-text>
        <div v-if="!isBusy && users.length != 0">
          <v-text-field
            v-model="filter"
            prepend-inner-icon="mdi-magnify"
            label="جستجو"
            hide-details
            single-line
            class="text-right w-80 mb-2 search-input dr-search"
            filled
            rounded
            clearable
          ></v-text-field>
          <div v-if="filteredUsers.length != 0">
            <v-card v-for="(item, index) in filteredUsers" :key="index">
                آدرس: {{item.address ? item.address : '-'}}
                <hr>
                <v-row>
                    <v-col>{{(item.first_name || item.last_name) ? item.first_name + ' ' + item.last_name : '(نام کاربر ثبت نشده)'}}</v-col>
                    <v-col>{{item.coordinate_mobile ? item.coordinate_mobile : '-'}}</v-col>
                </v-row>
            </v-card>
          </div>
          <div v-else>
            <hr />
            <h6 class="text-center">کاربری یافت نشد.</h6>
            <hr />
          </div>
        </div>
        <div v-else>
          <hr />
          <h6 class="text-center">کاربری یافت نشد.</h6>
          <hr />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      filter: "",
      isBusy: false,
    };
  },
  methods: {
    getUsers() {
      this.isBusy = true;
      this.$http
        .post(
          "http://stage.achareh.ir/api/karfarmas/address",
          {},
          {
            // headers: {
            auth: {
              Username: "karfarma_test",
              Password: "12345678",
            },
            // },
          }
        )
        .then((res) => {
          this.users = res.data;
          this.isBusy = false;
        })
        .catch((err) => {
          this.isBusy = false;
          this.toast(err.response.data.detail, "error");
        });
    },
  },
  computed: {
    filteredUsers() {
      if (this.filter) {
        return this.users.filter((x) => x.name.includes(this.filter));
      } else return this.users;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
