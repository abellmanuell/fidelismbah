<script setup>
import logo from "@/assets/fidelis.png";
import { cn } from "../../utils/cn";
import Paragraph from "./Paragraph.vue";
import Heading_2 from "./Heading_2.vue";

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
  <section :class="cn('py-20 px-4 lg:px-40 lg:flex justify-between')">
    <div class="space-y-8">
      <div class="h-[20%] flex">
        <img :src="logo" alt="Fidelis Logo" />
      </div>

      <Paragraph class="lg:w-2/5">
        Fidelis Mbah is a consummate Journalist known for incisive reporting,
        meticulous research and a gift for storytelling.
        <br />
        <br />
        With an unwavering commitment to fact driven stories and an unrelenting
        pursuit of truth, Fidelis dedicated to shedding light on the stories
        that need to be told.
      </Paragraph>

      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
        >
          <span> GET IN TOUCH</span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>

      <div>
        <ul class="flex space-x-4">
          <li v-for="social of socialnetworks">
            <a :href="social.href">
              <v-icon :name="social.icon" scale="1" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex space-x-10">
      <div class="mt-20 lg:mt-0">
        <div>
          <Heading_2 class-name="text-red-500 text-left" content="Services" />
          <ul class="text-sm space-y-4">
            <li>
              <RouterLink to=""> Documentary Film Making </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Speaking </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Media Training </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Cooperate PR & Branding </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Private Interview </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-20 lg:mt-0">
        <div>
          <Heading_2 class-name="text-red-500 text-left" content="Pages" />
          <ul class="text-sm space-y-4">
            <li>
              <RouterLink to="/about"> About </RouterLink>
            </li>

            <li>
              <RouterLink to="/services"> Services </RouterLink>
            </li>

            <li>
              <RouterLink to="/projects"> Projects </RouterLink>
            </li>

            <li>
              <RouterLink to="/blogs"> Blogs </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact"> Contact </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
