<template>
  <div
    class="grid grid-cols-[auto_2fr] gap-x-4 items-center"
    v-motion-slide-visible-left
  >
    <img :src="src" alt="Fidelis Mbah" class="object-cover w-32 md:w-52" />
    <div
      class="flex md:items-center flex-col md:flex-row md:justify-between space-y-4"
    >
      <div class="md:w-80">
        <span class="text-gray-500 mb-2 inline-block">{{ date }}</span>
        <h1 class="text-lg font-bold">{{ title }}</h1>
      </div>

      <RouterLink
        :href="href"
        class="text-sm py-2 px-4 border border-primary-500 rounded-full font-bold text-primary-500 hover:text-white hover:bg-primary-500 transition-all text-center"
      >
        <span> Read More </span>
        <v-icon name="pr-arrow-up-right" scale="1" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const { src, date, title, href } = defineProps({
  src: {
    type: String,
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  href: {
    type: String,
  },
});
</script>
