<template>
  <section :class="cn('py-32 px-4 lg:px-40')">
    <HeaderCaption
      title="Blog and Media"
      subTitle="Where Journalism meets perspective: My insight, analysis and commentary
        on stories that shapes our world"
    />

    <div>
      <Paragraph class-name="font-bold"> My latest updates </Paragraph>
    </div>

    <div class="my-5">
      <Thumbnail
        title="Croatian Primer Minister forecast growth for his country"
        description="Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
        date="November 31, 2025"
      />
      <Thumbnail
        title="Croatian Primer Minister forecast growth for his country"
        description="Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
        date="November 31, 2025"
      />
    </div>

    <LinkButton href="/watch-more-videos">WATCH MORE VIDEOS</LinkButton>

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

<script setup>
import { cn } from "../utils/cn";
import Heading_2 from "./basket/Heading_2.vue";
import Paragraph from "./basket/Paragraph.vue";
import testimonial from "../assets/testimonial.jpg";
import { ref } from "vue";
import HeaderCaption from "./HeaderCaption.vue";
import Thumbnail from "./Thumbnail.vue";
import LinkButton from "./LinkButton.vue";

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
