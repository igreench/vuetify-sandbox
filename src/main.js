import Vue from "vue";

import App from "./App";

import Vuetify from "vuetify";
import en from "vuetify/es5/locale/en";
import ru from "vuetify/es5/locale/ru";
import "vuetify/dist/vuetify.min.css";

import VueRouter from "vue-router";

import util from "./util";

(async function () {
  Vue.use(Vuetify);

  const vuetify = new Vuetify({
    theme: {
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: "#4C76C7",
          secondary: "#446585",
          accent: "#4C76C7",
          error: "#c74c4c",
          info: "#446585",
          success: "#4cc79a",
          warning: "#c77f4c"
        }
      }
    },
    lang: {
      locales: { en, ru },
      current: "en"
    },
    icons: {
      iconfont: "fa"
    }
  });

  Vue.use(VueRouter);

  const viewComponentsNames = await util.getViewComponentsNames();
  const viewRoutesNames = viewComponentsNames.map((el) =>
    el.toLowerCase().replace(".vue", "")
  );
  const routes = [
    ...viewComponentsNames.map((el, i) => ({
      path: `/${viewRoutesNames[i]}`,
      name: viewRoutesNames[i],
      components: {
        default: () => import(`./components/${el}`)
      }
    })),
    {
      path: "/*",
      redirect: `/${viewRoutesNames[0]}`
    },
    {
      path: "/",
      redirect: `/${viewRoutesNames[0]}`
    }
  ];
  const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
  });

  Vue.config.productionTip = false;

  /* eslint-disable no-new */
  new Vue({
    el: "#app",
    vuetify,
    router,
    components: { App },
    template: "<App/>"
  });
})();
