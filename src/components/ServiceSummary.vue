<script setup>
import { cn } from "../utils/cn";
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
import { ref } from "vue";

const products = [
  {
    description: "Public Communications",
    icon: "gi-satellite-communication",
  },
  {
    description: "Creative Writing",
    icon: "gi-feather",
  },
  {
    description: "Video Production",
    icon: "bi-camera-video-fill",
  },
  {
    description: "Press Relation",
    icon: "gi-palm-tree",
  },
];

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <section
    :class="
      cn(
        'py-32 px-4 lg:px-20',
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
          <Paragraph class="text-white">
            Leverage my journalism expertise to craft compelling content,
            investigate complex issues, and tell unforgettable stories.
          </Paragraph>
          <br />
          <Paragraph class="text-white">
            Whether you need a freelance journalist, content creator or media
            consultant, Fidelis have got you covered
          </Paragraph>
          <br />
          <Paragraph class="text-white">
            transforming information into engaging stories through expert
            research, interviewing and writing services
          </Paragraph>
        </div>

        <div class="space-x-10 my-4">
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
        class="bg-white text-primary-500 p-4 space-y-10 lg:space-y-0 lg:col-span-2 lg:col-start-2 lg:flex rounded-md gap-x-4 h-full"
      >
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="3"
          :responsiveOptions="responsiveOptions"
          :autoplayInterval="3000"
          class="h-full"
        >
          <template #item="slotProps">
            <div
              class="border-surface-200 dark:border-surface-700 m-2 p-6 border border-primary-500 flex justify-center items-center flex-co relative"
            >
              <div
                class="flex justify-center items-center flex-col min-h-[300px] space-y-2"
              >
                <span>
                  <v-icon :name="slotProps.data.icon" scale="2" />
                </span>
                <div>
                  <Paragraph class-name="text-center  font-bold">{{
                    slotProps.data.description
                  }}</Paragraph>
                </div>
              </div>
              <RouterLink
                to="/learn-more"
                class="bg-primary-500 text-white p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center absolute -bottom-2"
              >
                <v-icon name="pr-arrow-up-right" scale="1" />
              </RouterLink>
            </div>
          </template>
        </Carousel>
        <!-- 
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
        </div> -->
      </div>
    </div>
  </section>
</template>
