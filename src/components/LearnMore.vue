<template>
  <section
    :class="
      cn(
        ' bg-primary-200 h-screen flex items-center justify-center text-center'
      )
    "
  >
    <div class="w-[400px] space-y-4">
      <Heading_1 :content="title" />

      <LinkButton :href="linkProps.href">{{ linkProps.name }}</LinkButton>
    </div>
  </section>
</template>

<script setup>
import { cn } from "../utils/cn";
import Heading_1 from "./basket/Heading_1.vue";
import { defineProps } from "vue";
import LinkButton from "./LinkButton.vue";

const { className, linkProps, title } = defineProps({
  title: String,
  className: String,
  linkProps: Object,
});
</script>
