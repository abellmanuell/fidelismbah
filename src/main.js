import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "@/app/Home.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
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

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
