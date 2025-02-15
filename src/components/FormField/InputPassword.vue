<script setup>
import { EyeOff } from "lucide-vue-next";
import { Lock } from "lucide-vue-next";
import { Eye } from "lucide-vue-next";
import { ref } from "vue";
import { cn } from "@/utils/cn";

const isPasswordShow = ref(false);
const model = defineModel();
const { name, placeholder } = defineProps({
  name: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    default: "Password",
  },
});
</script>

<template>
  <div class="relative mb-4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
      <Lock :size="26" :stroke-width="0.85" />
    </div>
    <input
      autocomplete="on"
      :name="name"
      v-model="model"
      :type="isPasswordShow ? 'text' : 'password'"
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
    <button
      @click="isPasswordShow = !isPasswordShow"
      type="button"
      class="absolute inset-y-0 right-0 flex items-center pr-4"
    >
      <Eye :size="26" :stroke-width="0.85" v-if="!isPasswordShow" />
      <EyeOff v-else="isPasswordShow" :size="26" :stroke-width="0.85" />
    </button>
  </div>
</template>
