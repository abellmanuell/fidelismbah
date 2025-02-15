<script setup>
import { cn } from "@/utils/cn";
import img_logo from "@/assets/img_logo.png";

const { className } = defineProps({
  className: {
    type: String,
  },
});
</script>

<template>
  <div
    :class="cn('flex h-[20%] min-h-20 items-center justify-center', className)"
  >
    <img :src="img_logo" alt="Top Oasis Xchange Logo" class="w-[180px]" />
  </div>
</template>
