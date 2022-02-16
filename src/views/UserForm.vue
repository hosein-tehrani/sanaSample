<template>
  <div class="user-form">
    <h4 class="text-center page-title">لطفا اطلاعات ورود خود را وارد نمایید</h4>
    <hr />
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              outlined
              dennse
              label="نام"
              v-model="firstName"
              :append-icon="firstName ? 'mdi-check-circle' : 'mdi-circle-outline'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              outlined
              dennse
              label="نام خانوادگی"
              v-model="lastName"
              :append-icon="lastName ? 'mdi-check-circle' : 'mdi-circle-outline'"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              outlined
              dennse
              label="تلفن همراه"
              v-model="mobile"
              type="number"
              :append-icon="mobile ? 'mdi-check-circle' : 'mdi-circle-outline'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              outlined
              dennse
              label="تلفن ثابت"
              v-model="phoneNumber"
              type="number"
              :append-icon="phoneNumber ? 'mdi-check-circle' : 'mdi-circle-outline'"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-3">
      <v-card-text>
        <v-text-field
          outlined
          dennse
          label="آدرس دقیق"
          v-model="address"
          :append-icon="address ? 'mdi-check-circle' : 'mdi-circle-outline'"
        ></v-text-field>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
                <h5 class="float-right d-inline-block">جنسیت</h5>
                
                <div class="text-left gender-select">
                    <div class="gender" @click="selectGender('Male')" :class="gender == 'Male' && 'active'">آقا</div>
                    <div class="gender" @click="selectGender('Female')" :class="gender == 'Female' && 'active'">خانم</div>
                </div>
            </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <GoogleMap />
    <v-btn color="green" :disabled="!firstName || !lastName || !mobile || !phoneNumber || !address" :loading="isBusy">مرحله بعد</v-btn>
  </div>
</template>
<script>
import GoogleMap from './../components/GoogleMap.vue'
export default {
   components: {
    GoogleMap
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      mobile: "",
      phoneNumber: "",
      address: "",
      gender:'Male',
      isBusy:false
    };
  },
  methods: {
    sendInformation() {},
    selectGender(selected){
        this.gender = selected;
    }
  },
};
</script>
