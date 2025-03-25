<script setup>
import { cn } from "@/utils/cn";

const { className } = defineProps({
  className: {
    type: String,
  },
});
</script>

<template>
  <p :class="cn('text-neutral-700', className)">
    <slot />
  </p>
</template>
