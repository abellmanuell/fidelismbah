<template>
  <div
    class="grid grid-cols-[150px_2fr] md:grid-cols-[262px_2fr] border-b border-b-[#746F6F] py-2 md:gap-x-10 gap-x-4 items-center space-y-4 lg:space-y-0"
  >
    <div class="flex justify-center items-center lg:block">
      <iframe :src="src" class="w-[150px] h-[148px] md:w-[262px] md:h-[2fr]">
      </iframe>
    </div>
    <div class="lg:w-[540px]">
      <Heading_2
        class-name="text-left text-black text-sm leading-5 lg:text-xl !text-primary-500"
        :content="title"
      />
      <span class="text-sm text-primary-400 mb-2 block">{{ date }}</span>
      <Paragraph class="text-[#746F6F] hidden md:block">
        {{ description }}
      </Paragraph>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading_2 from "./basket/Heading_2.vue";

const { description, date, href } = defineProps({
  title: String,
  description: String,
  date: Date,
  src: String,
});
</script>
