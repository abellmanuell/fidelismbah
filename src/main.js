import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Carousel from "primevue/carousel";

import {
  GiHamburgerMenu,
  PrArrowUpRight,
  BiTwitter,
  PrLinkedin,
  BiYoutube,
  CoFacebook,
  BiInstagram,
  BiArrowRight,
  BiArrowLeft,
  FaRegularHandshake,
  PxTrending,
  GiPalmTree,
} from "oh-vue-icons/icons";

import Home from "@/app/Home.vue";
import About from "@/app/About.vue";
import Service from "./app/Service.vue";
import Projects from "./app/Projects.vue";

addIcons(
  GiHamburgerMenu,
  PrArrowUpRight,
  BiTwitter,
  PrLinkedin,
  BiYoutube,
  BiInstagram,
  BiArrowRight,
  BiArrowLeft,
  FaRegularHandshake,
  PxTrending,
  GiPalmTree,
  CoFacebook
);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Service },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component("Carousel", Carousel);
app.use(router);
app.use(PrimeVue, {
  theme: Aura,
});
app.component("v-icon", OhVueIcon);
app.mount("#app");
