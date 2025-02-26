<script setup>
import { cn } from "../utils/cn";
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
</script>

<template>
  <section
    :class="
      cn(
        'py-32 px-4 lg:px-40',
        'bg-primary-500 text-white',
        'bg-[url(/pattern.svg)] relative bg-cover bg-center bg-no-repeat'
      )
    "
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/20 lg:bg-primary-500/20"
    ></div>

    <div
      class="grid space-y-16 lg:space-y-0 lg:grid-cols-3 place-items-center gap-x-4 relative z-20"
    >
      <div>
        <Heading_2 content="Services" class-name="text-left !text-white" />

        <div>
          <Paragraph>
            Leverage my journalism expertise to craft compelling content,
            investigate complex issues, and tell unforgettable stories.
          </Paragraph>
          <br />
          <Paragraph>
            Whether you need a freelance journalist, content creator or media
            consultant, Fidelis have got you covered
          </Paragraph>
          <br />
          <Paragraph>
            transforming information into engaging stories through expert
            research, interviewing and writing services
          </Paragraph>
        </div>

        <div class="space-x-2 my-4">
          <button
            class="border rounded-full p-2 inline-block cursor-pointer hover:bg-primary-400"
          >
            <v-icon name="bi-arrow-left" scale="1.5" />
          </button>
          <button
            class="border rounded-full p-2 inline-block cursor-pointer hover:bg-primary-400"
          >
            <v-icon name="bi-arrow-right" scale="1.5" />
          </button>
        </div>
      </div>

      <div
        class="bg-white text-primary-500 p-4 pb-10 space-y-10 lg:space-y-0 lg:col-span-2 lg:col-start-2 lg:flex rounded-md gap-x-4"
      >
        <div
          class="relative border rounded-md border-primary-500 px-4 py-20 flex flex-col items-center"
        >
          <span>
            <v-icon name="fa-regular-handshake" scale="3" />
          </span>
          <Paragraph class="text-center my-4">
            Public Communications
          </Paragraph>
          <span
            class="bg-primary-500 rounded-full inline-block text-white p-1 absolute -bottom-5"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </span>
        </div>

        <div
          class="relative border rounded-md border-primary-500 px-4 py-20 flex flex-col items-center"
        >
          <span>
            <v-icon name="px-trending" scale="3" />
          </span>
          <Paragraph class="text-center my-4"> Creative Writing </Paragraph>
          <span
            class="bg-primary-500 rounded-full inline-block text-white p-1 absolute -bottom-5"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </span>
        </div>

        <div
          class="relative border rounded-md border-primary-500 px-4 py-20 flex flex-col items-center"
        >
          <span>
            <v-icon name="gi-palm-tree" scale="3" />
          </span>
          <Paragraph class="text-center my-4"> Media Production </Paragraph>
          <span
            class="bg-primary-500 rounded-full inline-block text-white p-1 absolute -bottom-5"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
