import '@babel/polyfill'
import 'mutationobserver-shim'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Navbar from './components/Navbar';
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
