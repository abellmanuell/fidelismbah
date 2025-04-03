<template>
  <section class="px-4 pt-10 pb-2 lg:px-32 md:pt-40 md:px-20">
    <HeaderCaption
      title="Client Testimonial"
      subTitle="Words from client’s who have experienced the value of my Journalism
        skills, work ethic and collaborative spirit"
    />

    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="shadow-lg border-surface-200 dark:border-surface-700 rounded m-2 p-4 h-[300px] flex justify-center items-center flex-col"
        >
          <div></div>

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
    src: testimonial1,
    description:
      "Fidelis is dedicated to sharing stories that matter, amplifying marginalized voices and exploring the impact of technology on society.",
    author: "Stephenie Morgan",
    designation: "Media Planning Centre for the Right to Health",
  },
  {
    src: testimonial,
    description:
      "“Fidelis has played as crucial role in shaping the cultural landscape; creating contents that reflects challenges and inspires society today”",
    author: "Fidelis Mbah",
    designation:
      "Communications Coordinator Development Partnership International",
  },
  {
    src: testimonial,
    description:
      "“I have seen Fidelis’ fruition and how he receives positive feedback and credibility from clients and audiencesthat is incredibly fulfilling”",
    author: "Don Fetus",
    designation:
      "Deputy President (Nigeria) International Press Institute (IPI)",
  },
  {
    src: testimonial,
    description:
      "“Weaver of words, teller of tales; exploring the human conditions through fiction, poetry and non fiction.Fidelis is a word smith and creative explorer, where words come alive”",
    author: "Don Festus",
    designation: "The Green Political Foundation Heinrich Böll Foundation",
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
