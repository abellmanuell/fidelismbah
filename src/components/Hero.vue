<script setup>
import Heading_1 from "../components/basket/Heading_1.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import { cn } from "../utils/cn";
import { RouterLink } from "vue-router";
import profilephoto from "../assets/profilephoto.png";
const socialnetworks = [
  {
    icon: "pi pi-twitter",
    href: "https://twitter.com/FidelisMbah",
    name: "twitter",
  },
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
    <!-- <div class="absolute z-40 flex justify-between flex-wrap">
      <DotLottieVue
        style="height: 500px; width: 500px"
        autoplay
        loop
        src="https://lottie.host/a6641ea1-1321-4077-a7fc-341a4715dd34/lt8U58lVQX.lottie"
      />

      <DotLottieVue
        style="height: 500px; width: 500px"
        autoplay
        loop
        src="https://lottie.host/a6641ea1-1321-4077-a7fc-341a4715dd34/lt8U58lVQX.lottie"
      />

      <DotLottieVue
        style="height: 500px; width: 500px"
        autoplay
        loop
        class="hidden md:block"
        src="https://lottie.host/a6641ea1-1321-4077-a7fc-341a4715dd34/lt8U58lVQX.lottie"
      />

      <DotLottieVue
        style="height: 500px; width: 500px"
        autoplay
        loop
        class="hidden md:block"
        src="https://lottie.host/a6641ea1-1321-4077-a7fc-341a4715dd34/lt8U58lVQX.lottie"
      />
    </div> -->
    <div class="px-4 pt-10 pb-2 lg:px-32 md:pt-40 md:px-20 relative z-20">
      <article
        class="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center space-y-10"
      >
        <div
          class="space-y-10 flex justify-center items-center flex-col md:justify-start md:items-start"
        >
          <Transition class="bounce">
            <Heading_1
              content="Fidelis Mbah"
              class="text-white !text-[3.5625rem] md:!text-9xl leading-28 text-center md:text-left mb-0"
            />
          </Transition>
          <div>
            <Paragraph
              class-name="text-2xl font-bold text-white text-center md:text-left my-4"
            >
              <VueWriter
                :array="[
                  'Journalism',
                  'Media Relations',
                  'Crisis Communication',
                  'Strategic Communications',
                  'Advocacy',
                ]"
                :typeSpeed="50"
              />
            </Paragraph>
          </div>

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
                <v-icon
                  v-if="social.name !== 'twitter'"
                  :name="social.icon"
                  scale="1.5"
                />
                <i
                  v-else
                  class="pi pi-twitter block pt-1"
                  style="font-size: 1.4em"
                ></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center" v-motion-slide-visible-right>
          <img
            :src="profilephoto"
            alt="Contact Me"
            class="w-[450px] mb-4 sm:mb-0 relative md:-top-24"
          />
        </div>
      </article>
    </div>
  </section>

  <!--   <div class="h-screen">
    <DotLottieVue
      style="height: 500px; width: 500px"
      autoplay
      loop
      src="https://lottie.host/a6641ea1-1321-4077-a7fc-341a4715dd34/lt8U58lVQX.lottie"
    />
  </div> -->
</template>
