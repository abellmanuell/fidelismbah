<template>
  <Navigationbar />
  <div class="overflow-hidden">
    <section :class="cn('px-5 py-20 lg:py-40 lg:px-20 ')">
      <HeaderCaption
        title="Explore Our Comprehensive Services Tailored to Your Unique Needs"
        subTitle="If you’re looking to Report a news event, tell a story or find answers to numerous questions, our services are tailored to Delivering In-Depth Stories and Expert Analysis to Inform and Inspire the general public without fear, favor or bias."
      />

      <div class="flex flex-col-reverse lg:grid grid-cols-[200px_auto] gap-x-4">
        <ul class="grid lg:grid-rows-5 gap-y-2">
          <li v-for="service of services" v-motion-slide-visible-right>
            <a
              exactActiveClass="bg-primary-500 text-white"
              :href="service.href"
              class="flex flex-col items-center justify-center lg:mb-4 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-center h-full"
            >
              <!-- <v-icon :name="service.icon" scale="2" /> -->
              <span> {{ service.title }} </span>
            </a>
          </li>
        </ul>

        <div
          class="mb-10 lg:m-0 overflow-y-scroll h-[700px]"
          v-motion-slide-visible-right
        >
          <RouterView />
        </div>
      </div>
    </section>

    <section>
      <LearnMore
        title="Start the conversation that will transform your Story, Brand and Events"
        :linkProps="{ name: 'LEARN MORE', href: '/contact-me' }"
      />
    </section>

    <!-- Foot component -->
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import LearnMore from "../components/LearnMore.vue";
import HeaderCaption from "../components/HeaderCaption.vue";
import { RouterView } from "vue-router";
const services = [
  {
    title: "Public Communications",
    icon: "gi-satellite-communication",
    href: "/services",
  },
  {
    title: "Creative Writing",
    icon: "gi-feather",
    href: "/creative-writing",
  },
  {
    title: "Media Production",
    icon: "bi-camera-video-fill",
    href: "/media-production",
  },
  {
    title: "Press Relation",
    icon: "gi-palm-tree",
    href: "/press-relation",
  },
  {
    title: "Video Production",
    icon: "md-videogameasset",
    href: "/video-production",
  },
];
</script>
