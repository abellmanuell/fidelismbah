import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Carousel from "primevue/carousel";
import VueWriter from "vue-writer";
import "primeicons/primeicons.css";
import VideoBackground from "vue-responsive-video-background-player";

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
  GiSatelliteCommunication,
  GiFeather,
  BiCameraVideoFill,
  MdVideogameasset,
} from "oh-vue-icons/icons";

import Home from "@/app/Home.vue";
import About from "@/app/About.vue";
import Service from "./app/Service.vue";
import Projects from "./app/Projects.vue";
import Blog from "./app/Blog.vue";
import ContactMe from "./app/ContactMe.vue";
import PublicCommunication from "./app/services/PublicCommunication.vue";
import CreativeWriting from "./app/services/CreativeWriting.vue";
import MediaProduction from "./app/services/MediaProduction.vue";
import PressRelation from "./app/services/PressRelation.vue";
import VideoProduction from "./app/services/VideoProduction.vue";
import { MotionPlugin } from "@vueuse/motion";

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
  CoFacebook,
  GiSatelliteCommunication,
  GiFeather,
  BiCameraVideoFill,
  MdVideogameasset
);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/services",
    name: "user-parent",
    component: Service,
    children: [
      {
        path: "",
        name: "user",
        component: PublicCommunication,
      },
      {
        path: "/creative-writing",
        component: CreativeWriting,
      },

      {
        path: "/media-production",
        component: MediaProduction,
      },

      {
        path: "/press-relation",
        component: PressRelation,
      },
      {
        path: "/video-production",
        component: VideoProduction,
      },
    ],
  },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/contact-me", component: ContactMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

const app = createApp(App);

app.component("Carousel", Carousel);
app.component("video-background", VideoBackground);
app.use(router);
app.use(PrimeVue, {
  theme: Aura,
});
app.use(MotionPlugin);
app.use(VueWriter);
app.component("v-icon", OhVueIcon);
app.mount("#app");
