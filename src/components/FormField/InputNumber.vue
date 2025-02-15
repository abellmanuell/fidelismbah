<script setup>
import { cn } from "@/utils/cn";

const model = defineModel();
const { placeholder, name } = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
    default: "Number",
  },
});
</script>

<template>
  <div class="relative mb-4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
      <slot></slot>
    </div>
    <input
      autocomplete="on"
      :name="name"
      v-model="model"
      type="number"
      :placeholder="placeholder"
      :class="
        cn(
          'w-full rounded-lg border-none',
          'bg-gray-200 text-gray-800',
          'py-4 pl-12 pr-4 text-sm outline-none placeholder:text-sm',
          'invalid:border-pink-500 invalid:text-pink-600',
          'focus:bg-gray-100 focus:invalid:border-pink-500 focus:invalid:outline-pink-500',
        )
      "
      required
    />
  </div>
</template>
