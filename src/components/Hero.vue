<script setup>
import Heading_1 from "../components/basket/Heading_1.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import { cn } from "../utils/cn";
import { RouterLink } from "vue-router";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import profilephoto from "../assets/profilephoto.png";

const socialnetworks = [
  { icon: "bi-twitter", href: "https://twitter.com/FidelisMbah" },
  {
    icon: "pr-linkedin",
    href: "https://www.linkedin.com/in/fidelis-mbah-0a219913/",
  },
  { icon: "co-facebook", href: "https://www.facebook.com/share/16HQ2x5ZkF/" },
  {
    icon: "bi-youtube",
    href: "https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber",
  },
  {
    icon: "bi-instagram",
    href: "https://www.instagram.com/fidelismbah/?hl=en",
  },
];
</script>

<template>
  <section
    :style="{ backgroundImage: `url(/photocolage.svg)` }"
    class="relative"
  >
    <div class="absolute inset-0 bg-primary-500/80 lg:bg-primary-500/80"></div>

    <div class="px-4 pt-10 pb-2 lg:px-32 md:pt-40 md:px-20 relative z-20">
      <article
        class="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center space-y-10"
      >
        <div
          class="space-y-10 flex justify-center items-center flex-col md:justify-start md:items-start"
        >
          <Heading_1
            content="Fidelis Mbah"
            class="text-white !text-[3.5625rem] leading-14 text-center !md:text-left"
          />

          <Paragraph class-name="text-lg text-white text-center md:text-left">
            <!-- <VueWriter
            :array="[
            'Journalism',
            'Media Relations',
            'Crisis Communication',
            'Strategic Communications Advocacy',
            ]"
            :typeSpeed="50"
            /> -->

            Journalism/Media Relations/Crisis Communication/Strategic
            Communications/Advocacy
            <br />
            <br />
            Excellent media/communications professional with strong journalistic
            credentials.
          </Paragraph>

          <RouterLink
            to="/about"
            class="text-sm py-3 px-6 border inline-block border-white rounded-full font-bold text-white hover:bg-primary-500 transition-all"
          >
            <span> LEARN MORE </span>
            <v-icon name="pr-arrow-up-right" scale="1" />
          </RouterLink>

          <ul class="flex space-x-4 text-white">
            <li v-for="social of socialnetworks">
              <a :href="social.href" target="_blank">
                <v-icon :name="social.icon" scale="1.5" />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center">
          <img
            :src="profilephoto"
            alt="Contact Me"
            class="w-[450px] mb-4 sm:mb-0 relative md:-top-24"
          />
        </div>
      </article>
    </div>
  </section>
</template>
