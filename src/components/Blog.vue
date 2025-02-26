<script setup>
import { cn } from "../utils/cn";
import Heading_2 from "./basket/Heading_2.vue";
import Paragraph from "./basket/Paragraph.vue";
import testimonial from "../assets/testimonial.jpg";
import { ref } from "vue";

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

const products = [
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
];
</script>

<template>
  <section :class="cn('py-32 px-4 lg:px-40')">
    <div class="mb-10">
      <Heading_2 content="Blog and Media" />
      <Paragraph class-name="text-center"
        >Where Journalism meets perspective: My insight, analysis and commentary
        on stories that shapes our world
      </Paragraph>
    </div>

    <div>
      <Paragraph class-name="font-bold"> My latest updates </Paragraph>
    </div>

    <div class="my-5">
      <div
        class="grid lg:grid-cols-[300px_auto] border-b py-2 gap-x-4 items-center space-y-4 lg:space-y-0"
      >
        <div>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
          >
          </iframe>
        </div>
        <div>
          <Heading_2
            class-name="text-left text-black"
            content="Croatian Primer Minister forecast growth for his country"
          />
          <span class="text-sm text-primary-400 mb-2 block">Jan 26, 2024</span>
          <Paragraph class-name="text-primary-400">
            Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat
          </Paragraph>
        </div>
      </div>

      <div
        class="grid lg:grid-cols-[300px_auto] mt-5 border-b py-2 gap-x-4 items-center space-y-4 lg:space-y-0"
      >
        <div>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
          >
          </iframe>
        </div>
        <div>
          <Heading_2
            class-name="text-left text-black"
            content="Croatian Primer Minister forecast growth for his country"
          />
          <span class="text-sm text-primary-400 mb-2 block">Jan 26, 2024</span>
          <Paragraph class-name="text-primary-400">
            Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat
          </Paragraph>
        </div>
      </div>
    </div>
    <div>
      <RouterLink
        to="/learn-more"
        class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
      >
        <span> WATCH MORE VIDEOS</span>
        <v-icon name="pr-arrow-up-right" scale="1" />
      </RouterLink>
    </div>

    <div class="mt-20">
      <div class="my-10">
        <Paragraph class-name="font-bold"> My latest blogs </Paragraph>
      </div>

      <Carousel
        :value="products"
        :numVisible="2"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="shadow border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <div>
              <img :src="slotProps.data.src" alt="Fidelis" class="rounded" />
            </div>

            <div class="mt-4">
              <Paragraph class-name="text-center">{{
                slotProps.data.description
              }}</Paragraph>
            </div>
            <hr class="my-4 text-primary-200" />
            <div class="text-center text-sm">
              <Heading_2
                class-name="!text-sm"
                :content="slotProps.data.author"
              />
              <i class="text-primary-400">{{ slotProps.data.designation }}</i>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
