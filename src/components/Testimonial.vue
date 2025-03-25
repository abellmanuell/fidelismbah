<template>
  <section :class="cn('py-32 px-4 lg:px-40')">
    <HeaderCaption
      title="Client Testimonial"
      subTitle="Words from client’s who have experienced the value of my Journalism
        skills, work ethic and collaborative spirit"
    />

    <Carousel
      :value="products"
      :numVisible="2"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="shadow border-surface-200 dark:border-surface-700 rounded m-2 p-4 w-[350px]"
        >
          <div>
            <img
              :src="slotProps.data.src"
              alt="Fidelis"
              class="rounded m-auto"
            />
          </div>

          <div class="mt-4">
            <Paragraph class-name="text-center">{{
              slotProps.data.description
            }}</Paragraph>
          </div>
          <hr class="my-4 text-primary-200" />
          <div class="text-center text-sm">
            <Heading_2 class-name="!text-sm" :content="slotProps.data.author" />
            <i class="text-primary-400">{{ slotProps.data.designation }}</i>
          </div>
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Heading_2 from "../components/basket/Heading_2.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import testimonial from "../assets/testimonial.jpg";
import testimonial1 from "../assets/testimonial1.jpg";
import { cn } from "../utils/cn";
import HeaderCaption from "./HeaderCaption.vue";
const products = [
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
  {
    src: testimonial1,
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
