import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import App from './App';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap';

Vue.use(BootstrapVue);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
new Vue({
  el: '#navbar',
  components: { Navbar },
  template: '<navbar/>'
});
new Vue({
  path: '/blog',
  el: '#blog',
  components: { Blog },
  template: '<blog/>'
});