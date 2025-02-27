<script setup>
import { RouterLink } from "vue-router";
import { cn } from "@/utils/cn";
import Navigationbar from "@/components/basket/Navigationbar.vue";
import Heading_1 from "@/components/basket/Heading_1.vue";

import Service from "../components/Service.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import Testimonial from "../components/Testimonial.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/basket/Footer.vue";
import Hero from "./Hero.vue";
</script>

<template>
  <Navigationbar />

  <Hero />

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
