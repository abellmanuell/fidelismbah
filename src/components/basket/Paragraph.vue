<script setup>
import { cn } from "@/utils/cn";

const { className } = defineProps({
  className: {
    type: String,
  },
});
</script>

<template>
  <p :class="cn('text-sm', className)">
    <slot />
  </p>
</template>
