import { Parallax } from '../components';
import {createGtm} from "vue-gtm";
/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
    Vue.component(createGtm, createGtm);
  }
};

export default globalComponents;
