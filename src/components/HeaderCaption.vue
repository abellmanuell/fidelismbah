<template>
  <div class="md:w-2xl m-auto text-center mb-15" v-motion-slide-visible-right>
    <Transition class="bounce">
      <Heading_2 :content="title" />
    </Transition>

    <Paragraph class-name="!text-[16px]">
      {{ subTitle }}
    </Paragraph>
  </div>
</template>
<script setup>
import Heading_2 from "./basket/Heading_2.vue";
import Paragraph from "./basket/Paragraph.vue";

const { title, subTitle } = defineProps({
  title: String,
  subTitle: String,
});
</script>
