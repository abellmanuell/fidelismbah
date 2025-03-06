<template>
  <div class="flex space-x-2 lg:space-x-4">
    <img :src="src" alt="Fidelis Mbah" width="200" />
    <div class="flex flex-col justify-between">
      <div>
        <span class="text-gray-500 mb-2 inline-block">{{ date }}</span>
        <h1 class="text-xl font-bold">{{ title }}</h1>
      </div>

      <RouterLink
        :to="href"
        class="text-sm py-2 px-4 border border-primary-500 rounded-full font-bold text-primary-500 hover:text-white hover:bg-primary-500 transition-all text-center self-start"
      >
        <span> Read More </span>
        <v-icon name="pr-arrow-up-right" scale="1" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
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
