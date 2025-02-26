<script setup>
import { RouterLink } from "vue-router";
import { cn } from "@/utils/cn";
import Navigationbar from "@/components/basket/Navigationbar.vue";
import Heading_1 from "@/components/basket/Heading_1.vue";
import Paragraph from "@/components/basket/Paragraph.vue";

import Service from "../components/Service.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import Testimonial from "../components/Testimonial.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/basket/Footer.vue";

const socialnetworks = [
  { icon: "bi-twitter", href: "https://twitter.com/FidelisMbah" },
  {
    icon: "pr-linkedin",
    href: "https://www.linkedin.com/in/fidelis-mbah-0a219913/",
  },
  { icon: "co-facebook", href: "#" },
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
  <Navigationbar />

  <section
    :class="
      cn(
        'relative bg-cover bg-center bg-no-repeat py-40 px-5 lg:px-40 lg:grid grid-cols-2',
        `bg-[url(/photocolage.svg)] h-screen`
      )
    "
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/80 lg:bg-primary-500/90"
    ></div>

    <div class="relative z-20 grid grid-rows-[auto_auto_auto] gap-10 lg:gap-5">
      <Heading_1
        content="Fidelis Mbah"
        class="!text-4xl text-white lg:!text-5xl"
      />

      <div class="text-white my-4">
        <Paragraph class-name="text-xl">
          Journalism/Media Relations/Crisis Communication/Strategic
          Communications/Advocacy
        </Paragraph>
        <br />
        <Paragraph class-name="text-xl">
          Excellent media/communications professional with strong journalistic
          credentials.
        </Paragraph>
      </div>

      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 border border-white rounded-full font-bold text-white hover:bg-primary-500 transition-all"
        >
          <span> LEARN MORE </span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>

      <div>
        <ul class="flex space-x-4 text-white">
          <li v-for="social of socialnetworks">
            <a :href="social.href" target="_blank">
              <v-icon :name="social.icon" scale="1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <About />

  <!-- Services Section -->
  <Service />

  <!-- Projects and appearance section -->
  <Project />

  <Testimonial />

  <Blog />

  <section
    :class="
      cn(
        ' bg-primary-200 h-screen flex items-center justify-center text-center'
      )
    "
  >
    <div class="w-[400px] space-y-4">
      <Heading_1
        content="Start the conversation that will transform your Story, Brand and Events"
      />

      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
        >
          <span>LEARN MORE</span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Foot component -->
  <Footer />
</template>
