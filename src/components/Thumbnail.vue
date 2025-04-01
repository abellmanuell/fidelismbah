<template>
  <div
    class="grid lg:grid-cols-[300px_auto] border-b py-2 gap-x-4 items-center space-y-4 lg:space-y-0"
  >
    <div>
      <iframe :src="src"> </iframe>
    </div>
    <div class="lg:w-[540px]">
      <Heading_2 class-name="text-left text-black" :content="title" />
      <Paragraph class-name="text-primary-400 text-ellipsis overflow-hidden">
        {{ description }}
      </Paragraph>
      <span class="text-sm text-primary-400 mb-2 block mt-5">{{ date }}</span>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading_2 from "./basket/Heading_2.vue";
import Paragraph from "./basket/Paragraph.vue";

const { description, date, href } = defineProps({
  title: String,
  description: String,
  date: Date,
  src: String,
});
</script>
