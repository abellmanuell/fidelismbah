<script setup>
import { cn } from "@/utils/cn.js";

const { content, className } = defineProps({
  content: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
});
</script>

<template>
  <h1 :class="cn('text-xl font-semibold text-primary-500', className)">
    {{ content }}
  </h1>
</template>
