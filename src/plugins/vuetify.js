import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    theme: {
        themes: {
          light: {
            primary: '#5089C6',
            secondary: '#7d8ec4',
          },
        },
      },
});
