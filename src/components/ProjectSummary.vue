<script setup>
import { cn } from "../utils/cn";
import project_image from "@/assets/project-image.png";
import obi from "@/assets/obi.png";
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
</script>

<template>
  <section :class="cn('pt-48 pb-20')">
    <div class="text-center mb-15">
      <Heading_2 content="Project and Appearance" />

      <div class="my-10">
        <img :src="project_image" alt="Project Image" class="w-full" />
      </div>
      <Paragraph class="px-4 lg:px-40 lg:w-4xl m-auto">
        Delving into the issues that matter; indepth reporting, thought
        provoking discussion and media appearances that spark conversations
      </Paragraph>
    </div>
  </section>

  <!--   <section :class="cn('pb-20 px-4 lg:px-40')">
    <div class="lg:flex lg:space-x-5 justify-center">
      <div
        class="flex flex-row-reverse lg:flex-col lg:items-center lg:space-x-2 lg:space-y-4 lg:max-w-[50px] border-b lg:border-b-0 lg:border-r border-primary-200 lg:px-4 py-4 lg:py-0"
      >
        <div>
          <button
            class="rounded-full p-1 block cursor-pointer bg-primary-500 text-white"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </button>
        </div>

        <Paragraph
          class="text-primary-500 lg:[writing-mode:vertical-rl] lg:h-[300px]"
        >
          What social media needs to advance a developing world
        </Paragraph>
      </div>

      <div
        class="flex flex-row-reverse lg:flex-col lg:items-center lg:space-x-2 lg:space-y-4 lg:max-w-[50px] border-b lg:border-b-0 lg:border-r border-primary-200 lg:px-4 py-4 lg:py-0"
      >
        <div>
          <button
            class="rounded-full p-1 block cursor-pointer bg-primary-500 text-white"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </button>
        </div>

        <Paragraph
          class="text-primary-500 lg:[writing-mode:vertical-rl] lg:h-[300px]"
        >
          What social media needs to advance a developing world
        </Paragraph>
      </div>

      <div
        class="grid lg:grid-cols-[200px_200px] place-items-center gap-5 lg:space-y-4 border-b lg:border-b-0 lg:border-r border-primary-200 lg:px-4 py-4 lg:py-0"
      >
        <div>
          <img :src="obi" alt="Peter Obi in conversation" />
        </div>
        <div>
          <span class="bg-primary-200 px-1">INTERVIEW</span>
          <Heading_2
            class-name="text-left"
            content="Establishing youth innovation foundations across states"
          />
          <Paragraph>
            a dive in to this captivating conversation as Fidelis Mbah
            interview’s Peter Obi, Labor party’s presidential candidate
          </Paragraph>
        </div>
      </div>

      <div
        class="flex flex-row-reverse lg:flex-col lg:items-center lg:space-x-2 lg:space-y-4 lg:max-w-[50px] border-b lg:border-b-0 lg:border-r border-primary-200 lg:px-4 py-4 lg:py-0"
      >
        <div>
          <button
            class="rounded-full p-1 block cursor-pointer bg-primary-500 text-white"
          >
            <v-icon name="pr-arrow-up-right" scale="1.5" />
          </button>
        </div>

        <Paragraph
          class="text-primary-500 lg:[writing-mode:vertical-rl] lg:h-[300px]"
        >
          What social media needs to advance a developing world
        </Paragraph>
      </div>
    </div>
  </section> -->

  <section :class="cn('pb-20 px-4 lg:px-40')">
    <ImageCarousel />
  </section>
</template>
