<script setup>
import { cn } from "../utils/cn";
import project_image from "@/assets/project-image.png";
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
</script>

<template>
  <section class="'pt-48 pb-20 py-32 overflow-hidden">
    <div class="text-center mb-15" v-motion-pop-visible>
      <Heading_2 content="Project and Appearance" />

      <div class="my-10">
        <img :src="project_image" alt="Project Image" class="w-full" />
      </div>
      <Paragraph class="px-4 lg:px-40 lg:w-4xl m-auto">
        Delving into the issues that matter; indepth reporting, thought
        provoking discussion and media appearances that spark conversations
      </Paragraph>
    </div>
  </section>

  <section class="pb-20 px-4 lg:px-40">
    <ImageCarousel />
  </section>
</template>
