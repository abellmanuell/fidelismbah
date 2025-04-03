<template>
  <div class="md:w-xl m-auto text-center mb-15">
    <Heading_2 :content="title" />
    <Paragraph class-name="text-md">
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
