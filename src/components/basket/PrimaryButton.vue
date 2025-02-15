<script setup>
import { cn } from "@/utils/cn";

const isSubmitting = defineModel("isSubmitting");
const emit = defineEmits(["submit"]);

const { className } = defineProps({
  className: {
    type: String,
  },
});
</script>

<template>
  <div>
    <button
      :class="
        cn(
          'mb-4 flex w-full items-center justify-center space-x-1 rounded-full p-4 text-center text-sm font-semibold text-white ring-2 ring-transparent',
          'bg-primary-500 hover:bg-primary-600',
          'focus:outline-none focus:ring-primary-200',
          className,
        )
      "
      type="submit"
      @submit="$emit('submit')"
      :disabled="isSubmitting"
    >
      <v-icon
        name="la-spinner-solid"
        animation="spin-pulse"
        v-if="isSubmitting"
      />
      <span v-else="isSubmitting">
        <slot />
      </span>
    </button>
  </div>
</template>
