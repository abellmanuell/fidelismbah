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
  <h2
    :class="
      cn('mb-4 text-center text-lg font-semibold text-primary-500', className)
    "
  >
    {{ content }}
  </h2>
</template>
