<script setup>
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
import { ref } from "vue";

const products = [
  {
    description: "Public Communications",
    href: "/services",
    bg_img: "fidelis1.jpg",
  },
  {
    description: "Creative Writing",
    href: "/creative-writing",
    bg_img: "creative-writing.jpg",
  },
  {
    description: "Media Production",
    href: "/media-production",
    bg_img: "vp1.png",
  },
  {
    description: "Press Relation",
    href: "/press-relation",
    bg_img: "press-news.png",
  },
  {
    description: "Video Production",
    href: "/media-production",
    bg_img: "media-production.jpg",
  },
];

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
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
    class="py-32 px-4 lg:px-20 bg-primary-500 text-white, bg-[url(/pattern.svg)] relative bg-cover bg-center bg-no-repeat overflow-hidden"
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/20 lg:bg-primary-500/20"
    ></div>

    <div
      class="grid space-y-16 lg:space-y-0 lg:grid-cols-3 place-items-center gap-x-4 relative z-20"
    >
      <div v-motion-slide-visible-bottom>
        <Heading_2 content="Services" class-name="text-left !text-white mb-4" />

        <div>
          <Paragraph class="text-white leading-8">
            Leverage my journalism expertise to craft compelling content,
            investigate complex issues, and tell unforgettable stories.
          </Paragraph>
          <br />
          <Paragraph class="text-white leading-8">
            Whether you need a freelance journalist, content creator or media
            consultant, Fidelis have got you covered
          </Paragraph>
          <br />
          <Paragraph class="text-white leading-8">
            transforming information into engaging stories through expert
            research, interviewing and writing services
          </Paragraph>
        </div>

        <!--  <div class="space-x-10 my-4">
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
        </div> -->
      </div>

      <div
        v-motion-slide-visible-right
        class="bg-white text-primary-500 p-2 space-y-10 lg:space-y-0 lg:col-span-2 lg:col-start-2 lg:flex rounded-md gap-x-2"
      >
        <Carousel
          :value="products"
          :responsiveOptions="responsiveOptions"
          :autoplayInterval="3000"
          :numVisible="3"
          :numScroll="1"
          class="h-full w-[280px] sm:w-[320px] md:w-full"
        >
          <template #item="slotProps">
            <div
              :style="{ backgroundImage: `url(${slotProps.data.bg_img})` }"
              class="rounded-md border-surface-200 dark:border-surface-700 mb-2 border md:m-2 md:p-6 flex justify-center items-center flex-col relative bg-cover bg-center bg-no-repeat"
            >
              <div
                class="absolute inset-0 bg-primary-500/80 lg:bg-primary-500/80"
              ></div>

              <div
                class="flex justify-center items-center flex-col min-h-[300px] space-y-2 z-10 text-white"
              >
                <!-- <span>
                  <v-icon :name="slotProps.data.icon" scale="2" />
                </span> -->
                <div>
                  <Paragraph class-name="text-center  font-bold text-white">{{
                    slotProps.data.description
                  }}</Paragraph>
                </div>
              </div>
              <RouterLink
                :to="slotProps.data.href"
                class="bg-primary-500 text-white p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center absolute -bottom-2 border-2 border-white shadow-md z-50"
              >
                <v-icon name="pr-arrow-up-right" scale="1" />
              </RouterLink>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
