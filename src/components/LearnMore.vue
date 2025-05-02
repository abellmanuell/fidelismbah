<template>
  <section
    class="bg-[#DCE3EA] h-screen flex items-center justify-center text-center p-2"
    v-motion-slide-visible-top
  >
    <div class="w-[500px] space-y-4" v-motion-slide-visible-bottom>
      <Heading_1 :content="title" class="!text-2xl" />

      <LinkButton :href="linkProps.href">{{ linkProps.name }}</LinkButton>
    </div>
  </section>
</template>

<script setup>
import Heading_1 from "./basket/Heading_1.vue";
import LinkButton from "./LinkButton.vue";

const { className, linkProps, title } = defineProps({
  title: String,
  className: String,
  linkProps: Object,
});
</script>
