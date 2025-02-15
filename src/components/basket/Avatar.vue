<script setup>
import { cn } from "@/utils/cn";

const { src, alt } = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div :class="cn('h-10 w-10 overflow-hidden rounded-full')">
    <img :src="src" :alt="alt" />
  </div>
</template>
