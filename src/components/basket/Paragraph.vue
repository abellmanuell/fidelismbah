<script setup>
import { cn } from "@/utils/cn";

const { className } = defineProps({
  className: {
    type: String,
  },
});
</script>

<template>
  <p :class="cn('text-[#746F6F] text-lg', className)">
    <slot />
  </p>
</template>
