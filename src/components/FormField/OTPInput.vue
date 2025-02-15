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
    default: "0",
  },
});
</script>

<template>
  <div class="relative mb-4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4"></div>
    <input
      autocomplete="on"
      :name="name"
      v-model="model"
      type="number"
      :placeholder="placeholder"
      max="1"
      min="1"
      :class="
        cn(
          'w-[50px] rounded-lg border-none text-center font-bold',
          'bg-gray-200 text-gray-800',
          'px-4 py-4 text-sm outline-none placeholder:text-sm',
          'focus:border-primary-500 focus:bg-gray-100 focus:outline-primary-500',
        )
      "
      required
    />
  </div>
</template>
