<script setup>
import { cn } from "@/utils/cn";
import Heading_3 from "./Heading_3.vue";
import Paragraph from "./Paragraph.vue";
import { RouterLink } from "vue-router";

const { to, title, description, className, cardColor } = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardColor: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
});
</script>

<template>
  <RouterLink
    :to="to"
    :class="
      cn('min-w-60 space-y-5 rounded-md bg-green-400/20 px-5 py-10', cardColor)
    "
  >
    <div
      :class="
        cn(
          'flex h-10 w-10 items-center justify-center rounded-full',
          'bg-gray-600 transition-all hover:bg-gray-700',
          'relative cursor-pointer font-bold text-white transition-all',
          className,
        )
      "
    >
      <slot />
    </div>

    <div>
      <Heading_3 :content="title" class-name="text-left mb-1 text-green-950" />

      <Paragraph class-name="text-left">{{ description }} </Paragraph>
    </div>
  </RouterLink>
</template>
