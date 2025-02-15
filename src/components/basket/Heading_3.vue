<script setup>
import { cn } from "@/utils/cn";

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
  <h4 :class="cn('mb-4 text-center font-semibold text-primary-500', className)">
    {{ content }}
  </h4>
</template>
