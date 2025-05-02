<template>
  <div
    class="flex flex-col md:flex-row space-x-2 lg:space-x-4"
    v-motion-slide-visible-right
  >
    <img
      :src="src"
      alt="Fidelis Mbah"
      class="object-cover md:w-[335px] md:h-[305px]"
    />
    <div class="flex flex-col justify-between space-y-4 my-4">
      <div>
        <span class="text-gray-500 mb-2 inline-block">{{ date }}</span>
        <h1 class="text-lg leading-5 font-bold">{{ title }}</h1>
      </div>
      <a
        :href="href"
        class="text-sm py-2 px-4 border border-primary-500 rounded-full font-bold text-primary-500 hover:text-white hover:bg-primary-500 transition-all text-center self-start"
      >
        <span> Read More </span>
        <v-icon name="pr-arrow-up-right" scale="1" />
      </a>
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
