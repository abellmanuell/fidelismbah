<template>
  <Navigationbar />
  <section :class="cn('px-5 py-20 lg:py-40 lg:px-20 ')">
    <HeaderCaption
      title="Explore Our Comprehensive Services Tailored to Your Unique Needs"
      subTitle="Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor
        sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit"
    />

    <div class="flex flex-col-reverse lg:grid grid-cols-[200px_auto] gap-x-4">
      <ul class="grid lg:grid-rows-5 gap-y-2">
        <li v-for="service of services">
          <RouterLink
            exactActiveClass="bg-primary-500 text-white"
            :to="service.href"
            class="flex flex-col items-center justify-center lg:mb-4 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-center h-full"
          >
            <v-icon :name="service.icon" scale="2" />
            <span> {{ service.title }} </span>
          </RouterLink>
        </li>
      </ul>

      <div class="mb-10 lg:m-0 overflow-y-scroll h-[700px]">
        <RouterView />
      </div>
    </div>
  </section>

  <section>
    <LearnMore
      title="Start the conversation that will transform your Story, Brand and Events"
      :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
    />
  </section>

  <!-- Foot component -->
  <Footer />
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
