import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta'
import router from './router';
import NowUiKit from './plugins/now-ui-kit';

// Import vue-analytics
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueMeta);

// Configure vue-analytics with your GTM ID (replace GTM-XXXXXXX with your actual GTM ID)
Vue.use(VueAnalytics, {
  id: 'GTM-XXXXXXX',
  router,
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    trace: process.env.NODE_ENV === 'development',
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
