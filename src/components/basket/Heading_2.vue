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
      cn('mb-2 text-center text-2xl font-semibold text-primary-500', className)
    "
  >
    {{ content }}
  </h2>
</template>
