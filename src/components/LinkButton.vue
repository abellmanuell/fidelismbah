<template>
  <div>
    <RouterLink
      :to="href"
      :class="
        cn(
          'text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white',
          className
        )
      "
    >
      <span><slot /></span>
      <v-icon name="pr-arrow-up-right" scale="1" />
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { cn } from "../utils/cn";

const { href, className } = defineProps({
  className: {
    type: String,
  },
  href: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
