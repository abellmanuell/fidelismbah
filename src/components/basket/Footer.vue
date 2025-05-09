<script setup>
import logo from "@/assets/fidelis.png";
import { cn } from "../../utils/cn";
import Paragraph from "./Paragraph.vue";
import Heading_2 from "./Heading_2.vue";

const socialnetworks = [
  {
    icon: "bi-twitter",
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
  <section class="py-20 px-4 lg:px-20 lg:flex justify-between">
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
        <a
          href="/contact-me"
          class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
        >
          <span> GET IN TOUCH</span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </a>
      </div>

      <div>
        <ul class="flex space-x-4">
          <li v-for="social of socialnetworks">
            <a :href="social.href" target="_blank">
              <v-icon
                v-if="social.name !== 'twitter'"
                :name="social.icon"
                scale="1.5"
              />
              <i
                v-else
                class="pi pi-twitter inline-block pt-1"
                style="font-size: 1.4em"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="space-x-10 flex lg:min-w-[300px]">
      <div class="mt-20 lg:mt-10">
        <div>
          <Heading_2
            class-name="text-red-500 text-left mb-6"
            content="Services"
          />
          <ul class="text-sm space-y-10 md:space-y-5">
            <li>
              <a href="/services"> Public Communications </a>
            </li>

            <li>
              <a href="/creative-writing"> Creative writing </a>
            </li>

            <li>
              <a href="/media-production"> Media Production </a>
            </li>

            <li>
              <a href="/press-relation"> Press Relations </a>
            </li>

            <li>
              <a href="/video-production"> Video Production </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-20 lg:mt-10">
        <div>
          <Heading_2 class-name="text-red-500 text-left mb-6" content="Pages" />
          <ul class="text-sm space-y-10 md:space-y-5">
            <li>
              <a href="/about"> About </a>
            </li>

            <li>
              <a href="/services"> Services </a>
            </li>

            <li>
              <a href="/projects"> Projects </a>
            </li>

            <li>
              <a href="/blogs"> Blogs </a>
            </li>

            <li>
              <a href="/contact-me"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
